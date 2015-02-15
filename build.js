#!/usr/bin/env node
'use strict';

var fs = require('fs');
var util = require('util');

var EXPRESSION = /^\.\n([\s\S]*?)^\.\n([\s\S]*?)^\.$|^#{1,6} *(.*)$/gm;

function rewrite(data) {
    var examples = [];
    var index = 0;
    var section;

    data.replace(/\r\n?/g, '\n')
        .replace(/→/g, '\t')
        .replace(/^<!-- END TESTS -->(.|[\n])*/m, '')
        .replace(EXPRESSION, function($0, $1, $2, $3) {
            if ($3) {
                section = $3;
            } else {
                index++;

                examples.push({
                    'markdown': $1,
                    'html': $2,
                    'section': section,
                    'number': index
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
