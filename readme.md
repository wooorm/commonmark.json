# commonmark.json

[CommonMark][] spec in JSON.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install commonmark.json
```

## Use

This package exports the following identifiers: `commonmark`.
There is no default export.

```js
import {commonmark} from 'commonmark.json'

console.log(commonmark)
```

Yields:

```js
[ { markdown: '\tfoo\tbaz\t\tbim\n',
    html: '<pre><code>foo\tbaz\t\tbim\n</code></pre>\n',
    section: 'Tabs' },
  { markdown: '  \tfoo\tbaz\t\tbim\n',
    html: '<pre><code>foo\tbaz\t\tbim\n</code></pre>\n',
    section: 'Tabs' },
  { markdown: '    a\ta\n    ὐ\ta\n',
    html: '<pre><code>a\ta\nὐ\ta\n</code></pre>\n',
    section: 'Tabs' },
  { markdown: '  - foo\n\n\tbar\n',
    html: '<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n',
    section: 'Tabs' },
  { markdown: '- foo\n\n\t\tbar\n',
    html: '<ul>\n<li>\n<p>foo</p>\n<pre><code>  bar\n</code></pre>\n</li>\n</ul>\n',
    section: 'Tabs' },
  ... 622 more items ]
```

## Building

On a Mac, run `node build` to transform the spec at CommonMark’s HEAD to JSON.

Run it with a `$VERSION` to get JSON for a specific version, such as:

```bash
VERSION="0.27" node build
```

## License

[MIT][] © [Titus Wormer][author]

[npm]: https://docs.npmjs.com/cli/install

[mit]: license

[author]: https://wooorm.com

[commonmark]: https://spec.commonmark.org
