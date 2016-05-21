#!/usr/bin/env node
'use strict';

var fs = require('fs');
var util = require('util');

if (process.env.VERSION < 0.24) {
  throw new Error(
    'This version of `commonmark.json` cannot extract specs ' +
    'lower than 0.24.\nUse an older version of `commonmark.json` ' +
    'instead'
  );
}

var EXPRESSION = /^`{32} example\n([\s\S]*?)\n`{32}$|^#{1,6} *(.*)$/gm;

function rewrite(data) {
    var examples = [];
    var index = 0;
    var section;

    data.replace(/\r\n?/g, '\n')
        .replace(/→/g, '\t')
        .replace(/^<!-- END TESTS -->(.|[\n])*/m, '')
        .replace(EXPRESSION, function($0, $1, $2) {
            var example;
            if ($2) {
                section = $2;
            } else {
                index++;
                example = $1.split(/\n\.(?:\n|$)/);

                examples.push({
                    'markdown': example[0] + '\n',
                    'html': example[1] ? example[1] + '\n' : '',
                    'section': section
                });
            }
        });

    return JSON.stringify(examples, null, 2) + '\n';
};

process.stdin.resume();

var chunks = [];

process.stdin.on('data', function (data) {
    chunks.push(data);
});

process.stdin.on('end', function() {
    process.stdout.write(rewrite(Buffer.concat(chunks).toString('utf-8')));
});
