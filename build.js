/**
 * @typedef Example
 *   A test case.
 * @property {string} markdown
 *   Actual input markdown.
 * @property {string} html
 *   Expected output HTML.
 * @property {string} section
 *   Label of test group.
 */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import process from 'node:process'
import fetch from 'node-fetch'

/** @type {string|number} */
let version = Number.parseInt(process.env.VERSION || '', 10)
const defaults = 'HEAD'

if (version && version < 0.24) {
  throw new Error(
    'This version of `commonmark.json` cannot extract specs ' +
      'lower than 0.24.\nUse an older version of `commonmark.json` ' +
      'instead'
  )
} else if (!version) {
  version = defaults
}

const response = await fetch(
  'https://raw.githubusercontent.com/commonmark/commonmark-spec/' +
    version +
    '/spec.txt'
)
const data = await response.text()

const re = /^`{32} example\n([\s\S]*?)\n`{32}$|^#{1,6} *(.*)$/gm
/** @type {Array<Example>} */
const examples = []
/** @type {string} */
let section

data
  .replace(/\r\n?/g, '\n')
  .replace(/→/g, '\t')
  .replace(/^<!-- END TESTS -->(.|\n)*/m, '')
  .replace(re, onexample)

const definedVersion = data.match(/version: '?([\d.]+)'?/)
assert(definedVersion, 'expected `version` in spec')

console.log(
  'Built CommonMark version ' +
    (version === defaults ? definedVersion[1] : version)
)

await fs.writeFile(
  'index.js',
  [
    '/**',
    ' * @typedef Example',
    ' *   A test case.',
    ' * @property {string} markdown',
    ' *   Actual input markdown.',
    ' * @property {string} html',
    ' *   Expected output HTML.',
    ' * @property {string} section',
    ' *   Label of test group.',
    ' */',
    '',
    '/**',
    ' * CommonMark test spec in JSON',
    ' *',
    ' * @type {Array<Example>}',
    ' */',
    'export const commonmark = ' + JSON.stringify(examples, null, 2),
    ''
  ].join('\n')
)

/**
 * @param {string} _
 * @param {string|undefined} $1
 * @param {string|undefined} $2
 */
function onexample(_, $1, $2) {
  if ($2) {
    section = $2
  } else if ($1) {
    const example = $1.split(/\n\.(?:\n|$)/)

    examples.push({
      markdown: example[0] + '\n',
      html: example[1] ? example[1] + '\n' : '',
      section
    })
  }

  return ''
}
