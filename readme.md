# commonmark.json

CommonMark’s spec in JSON.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install commonmark.json
```

## Usage

```javascript
var spec = require('commonmark.json');
/*
 * [
 *   {
 *     "markdown": "\tfoo\tbaz\t\tbim\n",
 *     "html": "<pre><code>foo baz     bim\n</code></pre>\n",
 *     "section": "Tab expansion",
 *     "number": 1
 *   }
 *   ...
 * ]
 */
```

## Building

On a Mac, run `node build` to transform the spec at CommonMark’s
master branch to JSON.

Run it with a `$VERSION` to get JSON for a specific version, such as:

```bash
VERSION="0.17" node build
```

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
