import fs from 'node:fs'
import https from 'node:https'
import process from 'node:process'
import {bail} from 'bail'
import concat from 'concat-stream'

/** @type {string|number} */
var version = Number.parseInt(process.env.VERSION, 10)
var defaults = 'HEAD'

if (version && version < 0.24) {
  throw new Error(
    'This version of `commonmark.json` cannot extract specs ' +
      'lower than 0.24.\nUse an older version of `commonmark.json` ' +
      'instead'
  )
} else if (!version) {
  version = defaults
}

https.get(
  'https://raw.githubusercontent.com/commonmark/commonmark-spec/' +
    version +
    '/spec.txt',
  onconnection
)

/** @param {import('http').IncomingMessage} response */
function onconnection(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

/** @param {Buffer} buf */
function onconcat(buf) {
  var re = /^`{32} example\n([\s\S]*?)\n`{32}$|^#{1,6} *(.*)$/gm
  /** @type {Array.<Object.<string, string>>} */
  var examples = []
  var data = String(buf)
  /** @type {string} */
  var section

  data
    .replace(/\r\n?/g, '\n')
    .replace(/→/g, '\t')
    .replace(/^<!-- END TESTS -->(.|\n)*/m, '')
    .replace(re, onexample)

  console.log(
    'Built CommonMark version ' +
      (version === defaults ? data.match(/version: '?([\d.]+)'?/)[1] : version)
  )

  fs.writeFile(
    'index.js',
    'export var commonmark = ' + JSON.stringify(examples, null, 2) + '\n',
    bail
  )

  /**
   * @param {string} _
   * @param {string?} $1
   * @param {string?} $2
   */
  function onexample(_, $1, $2) {
    /** @type {Array.<string>} */
    var example

    if ($2) {
      section = $2
    } else {
      example = $1.split(/\n\.(?:\n|$)/)

      examples.push({
        markdown: example[0] + '\n',
        html: example[1] ? example[1] + '\n' : '',
        section
      })
    }

    return ''
  }
}
