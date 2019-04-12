'use strict'

var fs = require('fs')
var https = require('https')
var bail = require('bail')
var concat = require('concat-stream')

var version = process.env.VERSION
var defaults = 'master'

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
  'https://raw.githubusercontent.com/jgm/CommonMark/' + version + '/spec.txt',
  onconnection
)

function onconnection(res) {
  res.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(data) {
  var re = /^`{32} example\n([\s\S]*?)\n`{32}$|^#{1,6} *(.*)$/gm
  var examples = []
  var section

  data = String(data)

  if (version === defaults) {
    version = data.match(/version: ([0-9.]+)/)[1]
  }

  data
    .replace(/\r\n?/g, '\n')
    .replace(/→/g, '\t')
    .replace(/^<!-- END TESTS -->(.|[\n])*/m, '')
    .replace(re, onexample)

  examples = JSON.stringify(examples, 0, 2)

  console.log('Built CommonMark version ' + version)

  fs.writeFile('index.json', examples + '\n', bail)

  function onexample($0, $1, $2) {
    var example

    if ($2) {
      section = $2
    } else {
      example = $1.split(/\n\.(?:\n|$)/)

      examples.push({
        markdown: example[0] + '\n',
        html: example[1] ? example[1] + '\n' : '',
        section: section
      })
    }
  }
}
