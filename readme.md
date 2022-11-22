# commonmark.json

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[CommonMark][] spec in JSON.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`commonmark`](#commonmark)
    *   [`Example`](#example)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package exposes the CommonMark examples (tests) as plain objects.

## When should I use this?

You can use this package when you are building a markdown parser.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install commonmark.json
```

In Deno with [`esm.sh`][esmsh]:

```js
import {commonmark} from 'https://esm.sh/commonmark.json@0.30'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {commonmark} from 'https://esm.sh/commonmark.json@0.30?bundle'
</script>
```

## Use

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

## API

This package exports the identifiers `commonmark`.
There is no default export.

### `commonmark`

CommonMark test spec in JSON (`Array<Example>`).

### `Example`

A test case (`Object`).
Has the following fields:

*   `markdown` (`string`) — actual input markdown
*   `html` (`string`) — expected output HTML
*   `section` (`string`) — label of test group.

## Types

This package is fully typed with [TypeScript][].
It exports the additional type `Example`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

To generate new examples, run `npm run generate` to transform the spec at
CommonMark’s HEAD to JSON.

Run it with a `$VERSION` to get JSON for a specific version, such as:

```bash
VERSION="0.27" node build
```

## License

[MIT][license] © [Titus Wormer][author]

[build-badge]: https://github.com/wooorm/commonmark.json/workflows/main/badge.svg

[build]: https://github.com/wooorm/commonmark.json/actions

[downloads-badge]: https://img.shields.io/npm/dm/commonmark.json.svg

[downloads]: https://www.npmjs.com/package/commonmark.json

[size-badge]: https://img.shields.io/bundlephobia/minzip/commonmark.json.svg

[size]: https://bundlephobia.com/result?p=commonmark.json

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[commonmark]: https://spec.commonmark.org
