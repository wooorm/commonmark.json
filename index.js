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

/**
 * CommonMark test spec in JSON
 *
 * @type {Array<Example>}
 */
export const commonmark = [
  {
    markdown: '\tfoo\tbaz\t\tbim\n',
    html: '<pre><code>foo\tbaz\t\tbim\n</code></pre>\n',
    section: 'Tabs'
  },
  {
    markdown: '  \tfoo\tbaz\t\tbim\n',
    html: '<pre><code>foo\tbaz\t\tbim\n</code></pre>\n',
    section: 'Tabs'
  },
  {
    markdown: '    a\ta\n    ὐ\ta\n',
    html: '<pre><code>a\ta\nὐ\ta\n</code></pre>\n',
    section: 'Tabs'
  },
  {
    markdown: '  - foo\n\n\tbar\n',
    html: '<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n',
    section: 'Tabs'
  },
  {
    markdown: '- foo\n\n\t\tbar\n',
    html: '<ul>\n<li>\n<p>foo</p>\n<pre><code>  bar\n</code></pre>\n</li>\n</ul>\n',
    section: 'Tabs'
  },
  {
    markdown: '>\t\tfoo\n',
    html: '<blockquote>\n<pre><code>  foo\n</code></pre>\n</blockquote>\n',
    section: 'Tabs'
  },
  {
    markdown: '-\t\tfoo\n',
    html: '<ul>\n<li>\n<pre><code>  foo\n</code></pre>\n</li>\n</ul>\n',
    section: 'Tabs'
  },
  {
    markdown: '    foo\n\tbar\n',
    html: '<pre><code>foo\nbar\n</code></pre>\n',
    section: 'Tabs'
  },
  {
    markdown: ' - foo\n   - bar\n\t - baz\n',
    html: '<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
    section: 'Tabs'
  },
  {
    markdown: '#\tFoo\n',
    html: '<h1>Foo</h1>\n',
    section: 'Tabs'
  },
  {
    markdown: '*\t*\t*\t\n',
    html: '<hr />\n',
    section: 'Tabs'
  },
  {
    markdown:
      '\\!\\"\\#\\$\\%\\&\\\'\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\\\\\]\\^\\_\\`\\{\\|\\}\\~\n',
    html: "<p>!&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</p>\n",
    section: 'Backslash escapes'
  },
  {
    markdown: '\\\t\\A\\a\\ \\3\\φ\\«\n',
    html: '<p>\\\t\\A\\a\\ \\3\\φ\\«</p>\n',
    section: 'Backslash escapes'
  },
  {
    markdown:
      '\\*not emphasized*\n\\<br/> not a tag\n\\[not a link](/foo)\n\\`not code`\n1\\. not a list\n\\* not a list\n\\# not a heading\n\\[foo]: /url "not a reference"\n\\&ouml; not a character entity\n',
    html: '<p>*not emphasized*\n&lt;br/&gt; not a tag\n[not a link](/foo)\n`not code`\n1. not a list\n* not a list\n# not a heading\n[foo]: /url &quot;not a reference&quot;\n&amp;ouml; not a character entity</p>\n',
    section: 'Backslash escapes'
  },
  {
    markdown: '\\\\*emphasis*\n',
    html: '<p>\\<em>emphasis</em></p>\n',
    section: 'Backslash escapes'
  },
  {
    markdown: 'foo\\\nbar\n',
    html: '<p>foo<br />\nbar</p>\n',
    section: 'Backslash escapes'
  },
  {
    markdown: '`` \\[\\` ``\n',
    html: '<p><code>\\[\\`</code></p>\n',
    section: 'Backslash escapes'
  },
  {
    markdown: '    \\[\\]\n',
    html: '<pre><code>\\[\\]\n</code></pre>\n',
    section: 'Backslash escapes'
  },
  {
    markdown: '~~~\n\\[\\]\n~~~\n',
    html: '<pre><code>\\[\\]\n</code></pre>\n',
    section: 'Backslash escapes'
  },
  {
    markdown: '<https://example.com?find=\\*>\n',
    html: '<p><a href="https://example.com?find=%5C*">https://example.com?find=\\*</a></p>\n',
    section: 'Backslash escapes'
  },
  {
    markdown: '<a href="/bar\\/)">\n',
    html: '<a href="/bar\\/)">\n',
    section: 'Backslash escapes'
  },
  {
    markdown: '[foo](/bar\\* "ti\\*tle")\n',
    html: '<p><a href="/bar*" title="ti*tle">foo</a></p>\n',
    section: 'Backslash escapes'
  },
  {
    markdown: '[foo]\n\n[foo]: /bar\\* "ti\\*tle"\n',
    html: '<p><a href="/bar*" title="ti*tle">foo</a></p>\n',
    section: 'Backslash escapes'
  },
  {
    markdown: '``` foo\\+bar\nfoo\n```\n',
    html: '<pre><code class="language-foo+bar">foo\n</code></pre>\n',
    section: 'Backslash escapes'
  },
  {
    markdown:
      '&nbsp; &amp; &copy; &AElig; &Dcaron;\n&frac34; &HilbertSpace; &DifferentialD;\n&ClockwiseContourIntegral; &ngE;\n',
    html: '<p>  &amp; © Æ Ď\n¾ ℋ ⅆ\n∲ ≧̸</p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '&#35; &#1234; &#992; &#0;\n',
    html: '<p># Ӓ Ϡ �</p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '&#X22; &#XD06; &#xcab;\n',
    html: '<p>&quot; ആ ಫ</p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown:
      '&nbsp &x; &#; &#x;\n&#87654321;\n&#abcdef0;\n&ThisIsNotDefined; &hi?;\n',
    html: '<p>&amp;nbsp &amp;x; &amp;#; &amp;#x;\n&amp;#87654321;\n&amp;#abcdef0;\n&amp;ThisIsNotDefined; &amp;hi?;</p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '&copy\n',
    html: '<p>&amp;copy</p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '&MadeUpEntity;\n',
    html: '<p>&amp;MadeUpEntity;</p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '<a href="&ouml;&ouml;.html">\n',
    html: '<a href="&ouml;&ouml;.html">\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '[foo](/f&ouml;&ouml; "f&ouml;&ouml;")\n',
    html: '<p><a href="/f%C3%B6%C3%B6" title="föö">foo</a></p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '[foo]\n\n[foo]: /f&ouml;&ouml; "f&ouml;&ouml;"\n',
    html: '<p><a href="/f%C3%B6%C3%B6" title="föö">foo</a></p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '``` f&ouml;&ouml;\nfoo\n```\n',
    html: '<pre><code class="language-föö">foo\n</code></pre>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '`f&ouml;&ouml;`\n',
    html: '<p><code>f&amp;ouml;&amp;ouml;</code></p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '    f&ouml;f&ouml;\n',
    html: '<pre><code>f&amp;ouml;f&amp;ouml;\n</code></pre>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '&#42;foo&#42;\n*foo*\n',
    html: '<p>*foo*\n<em>foo</em></p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '&#42; foo\n\n* foo\n',
    html: '<p>* foo</p>\n<ul>\n<li>foo</li>\n</ul>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: 'foo&#10;&#10;bar\n',
    html: '<p>foo\n\nbar</p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '&#9;foo\n',
    html: '<p>\tfoo</p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '[a](url &quot;tit&quot;)\n',
    html: '<p>[a](url &quot;tit&quot;)</p>\n',
    section: 'Entity and numeric character references'
  },
  {
    markdown: '- `one\n- two`\n',
    html: '<ul>\n<li>`one</li>\n<li>two`</li>\n</ul>\n',
    section: 'Precedence'
  },
  {
    markdown: '***\n---\n___\n',
    html: '<hr />\n<hr />\n<hr />\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '+++\n',
    html: '<p>+++</p>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '===\n',
    html: '<p>===</p>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '--\n**\n__\n',
    html: '<p>--\n**\n__</p>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: ' ***\n  ***\n   ***\n',
    html: '<hr />\n<hr />\n<hr />\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '    ***\n',
    html: '<pre><code>***\n</code></pre>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: 'Foo\n    ***\n',
    html: '<p>Foo\n***</p>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '_____________________________________\n',
    html: '<hr />\n',
    section: 'Thematic breaks'
  },
  {
    markdown: ' - - -\n',
    html: '<hr />\n',
    section: 'Thematic breaks'
  },
  {
    markdown: ' **  * ** * ** * **\n',
    html: '<hr />\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '-     -      -      -\n',
    html: '<hr />\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '- - - -    \n',
    html: '<hr />\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '_ _ _ _ a\n\na------\n\n---a---\n',
    html: '<p>_ _ _ _ a</p>\n<p>a------</p>\n<p>---a---</p>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: ' *-*\n',
    html: '<p><em>-</em></p>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '- foo\n***\n- bar\n',
    html: '<ul>\n<li>foo</li>\n</ul>\n<hr />\n<ul>\n<li>bar</li>\n</ul>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: 'Foo\n***\nbar\n',
    html: '<p>Foo</p>\n<hr />\n<p>bar</p>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: 'Foo\n---\nbar\n',
    html: '<h2>Foo</h2>\n<p>bar</p>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '* Foo\n* * *\n* Bar\n',
    html: '<ul>\n<li>Foo</li>\n</ul>\n<hr />\n<ul>\n<li>Bar</li>\n</ul>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '- Foo\n- * * *\n',
    html: '<ul>\n<li>Foo</li>\n<li>\n<hr />\n</li>\n</ul>\n',
    section: 'Thematic breaks'
  },
  {
    markdown: '# foo\n## foo\n### foo\n#### foo\n##### foo\n###### foo\n',
    html: '<h1>foo</h1>\n<h2>foo</h2>\n<h3>foo</h3>\n<h4>foo</h4>\n<h5>foo</h5>\n<h6>foo</h6>\n',
    section: 'ATX headings'
  },
  {
    markdown: '####### foo\n',
    html: '<p>####### foo</p>\n',
    section: 'ATX headings'
  },
  {
    markdown: '#5 bolt\n\n#hashtag\n',
    html: '<p>#5 bolt</p>\n<p>#hashtag</p>\n',
    section: 'ATX headings'
  },
  {
    markdown: '\\## foo\n',
    html: '<p>## foo</p>\n',
    section: 'ATX headings'
  },
  {
    markdown: '# foo *bar* \\*baz\\*\n',
    html: '<h1>foo <em>bar</em> *baz*</h1>\n',
    section: 'ATX headings'
  },
  {
    markdown: '#                  foo                     \n',
    html: '<h1>foo</h1>\n',
    section: 'ATX headings'
  },
  {
    markdown: ' ### foo\n  ## foo\n   # foo\n',
    html: '<h3>foo</h3>\n<h2>foo</h2>\n<h1>foo</h1>\n',
    section: 'ATX headings'
  },
  {
    markdown: '    # foo\n',
    html: '<pre><code># foo\n</code></pre>\n',
    section: 'ATX headings'
  },
  {
    markdown: 'foo\n    # bar\n',
    html: '<p>foo\n# bar</p>\n',
    section: 'ATX headings'
  },
  {
    markdown: '## foo ##\n  ###   bar    ###\n',
    html: '<h2>foo</h2>\n<h3>bar</h3>\n',
    section: 'ATX headings'
  },
  {
    markdown: '# foo ##################################\n##### foo ##\n',
    html: '<h1>foo</h1>\n<h5>foo</h5>\n',
    section: 'ATX headings'
  },
  {
    markdown: '### foo ###     \n',
    html: '<h3>foo</h3>\n',
    section: 'ATX headings'
  },
  {
    markdown: '### foo ### b\n',
    html: '<h3>foo ### b</h3>\n',
    section: 'ATX headings'
  },
  {
    markdown: '# foo#\n',
    html: '<h1>foo#</h1>\n',
    section: 'ATX headings'
  },
  {
    markdown: '### foo \\###\n## foo #\\##\n# foo \\#\n',
    html: '<h3>foo ###</h3>\n<h2>foo ###</h2>\n<h1>foo #</h1>\n',
    section: 'ATX headings'
  },
  {
    markdown: '****\n## foo\n****\n',
    html: '<hr />\n<h2>foo</h2>\n<hr />\n',
    section: 'ATX headings'
  },
  {
    markdown: 'Foo bar\n# baz\nBar foo\n',
    html: '<p>Foo bar</p>\n<h1>baz</h1>\n<p>Bar foo</p>\n',
    section: 'ATX headings'
  },
  {
    markdown: '## \n#\n### ###\n',
    html: '<h2></h2>\n<h1></h1>\n<h3></h3>\n',
    section: 'ATX headings'
  },
  {
    markdown: 'Foo *bar*\n=========\n\nFoo *bar*\n---------\n',
    html: '<h1>Foo <em>bar</em></h1>\n<h2>Foo <em>bar</em></h2>\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo *bar\nbaz*\n====\n',
    html: '<h1>Foo <em>bar\nbaz</em></h1>\n',
    section: 'Setext headings'
  },
  {
    markdown: '  Foo *bar\nbaz*\t\n====\n',
    html: '<h1>Foo <em>bar\nbaz</em></h1>\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo\n-------------------------\n\nFoo\n=\n',
    html: '<h2>Foo</h2>\n<h1>Foo</h1>\n',
    section: 'Setext headings'
  },
  {
    markdown: '   Foo\n---\n\n  Foo\n-----\n\n  Foo\n  ===\n',
    html: '<h2>Foo</h2>\n<h2>Foo</h2>\n<h1>Foo</h1>\n',
    section: 'Setext headings'
  },
  {
    markdown: '    Foo\n    ---\n\n    Foo\n---\n',
    html: '<pre><code>Foo\n---\n\nFoo\n</code></pre>\n<hr />\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo\n   ----      \n',
    html: '<h2>Foo</h2>\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo\n    ---\n',
    html: '<p>Foo\n---</p>\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo\n= =\n\nFoo\n--- -\n',
    html: '<p>Foo\n= =</p>\n<p>Foo</p>\n<hr />\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo  \n-----\n',
    html: '<h2>Foo</h2>\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo\\\n----\n',
    html: '<h2>Foo\\</h2>\n',
    section: 'Setext headings'
  },
  {
    markdown: '`Foo\n----\n`\n\n<a title="a lot\n---\nof dashes"/>\n',
    html: '<h2>`Foo</h2>\n<p>`</p>\n<h2>&lt;a title=&quot;a lot</h2>\n<p>of dashes&quot;/&gt;</p>\n',
    section: 'Setext headings'
  },
  {
    markdown: '> Foo\n---\n',
    html: '<blockquote>\n<p>Foo</p>\n</blockquote>\n<hr />\n',
    section: 'Setext headings'
  },
  {
    markdown: '> foo\nbar\n===\n',
    html: '<blockquote>\n<p>foo\nbar\n===</p>\n</blockquote>\n',
    section: 'Setext headings'
  },
  {
    markdown: '- Foo\n---\n',
    html: '<ul>\n<li>Foo</li>\n</ul>\n<hr />\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo\nBar\n---\n',
    html: '<h2>Foo\nBar</h2>\n',
    section: 'Setext headings'
  },
  {
    markdown: '---\nFoo\n---\nBar\n---\nBaz\n',
    html: '<hr />\n<h2>Foo</h2>\n<h2>Bar</h2>\n<p>Baz</p>\n',
    section: 'Setext headings'
  },
  {
    markdown: '\n====\n',
    html: '<p>====</p>\n',
    section: 'Setext headings'
  },
  {
    markdown: '---\n---\n',
    html: '<hr />\n<hr />\n',
    section: 'Setext headings'
  },
  {
    markdown: '- foo\n-----\n',
    html: '<ul>\n<li>foo</li>\n</ul>\n<hr />\n',
    section: 'Setext headings'
  },
  {
    markdown: '    foo\n---\n',
    html: '<pre><code>foo\n</code></pre>\n<hr />\n',
    section: 'Setext headings'
  },
  {
    markdown: '> foo\n-----\n',
    html: '<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n',
    section: 'Setext headings'
  },
  {
    markdown: '\\> foo\n------\n',
    html: '<h2>&gt; foo</h2>\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo\n\nbar\n---\nbaz\n',
    html: '<p>Foo</p>\n<h2>bar</h2>\n<p>baz</p>\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo\nbar\n\n---\n\nbaz\n',
    html: '<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo\nbar\n* * *\nbaz\n',
    html: '<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n',
    section: 'Setext headings'
  },
  {
    markdown: 'Foo\nbar\n\\---\nbaz\n',
    html: '<p>Foo\nbar\n---\nbaz</p>\n',
    section: 'Setext headings'
  },
  {
    markdown: '    a simple\n      indented code block\n',
    html: '<pre><code>a simple\n  indented code block\n</code></pre>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '  - foo\n\n    bar\n',
    html: '<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '1.  foo\n\n    - bar\n',
    html: '<ol>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '    <a/>\n    *hi*\n\n    - one\n',
    html: '<pre><code>&lt;a/&gt;\n*hi*\n\n- one\n</code></pre>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '    chunk1\n\n    chunk2\n  \n \n \n    chunk3\n',
    html: '<pre><code>chunk1\n\nchunk2\n\n\n\nchunk3\n</code></pre>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '    chunk1\n      \n      chunk2\n',
    html: '<pre><code>chunk1\n  \n  chunk2\n</code></pre>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: 'Foo\n    bar\n\n',
    html: '<p>Foo\nbar</p>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '    foo\nbar\n',
    html: '<pre><code>foo\n</code></pre>\n<p>bar</p>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '# Heading\n    foo\nHeading\n------\n    foo\n----\n',
    html: '<h1>Heading</h1>\n<pre><code>foo\n</code></pre>\n<h2>Heading</h2>\n<pre><code>foo\n</code></pre>\n<hr />\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '        foo\n    bar\n',
    html: '<pre><code>    foo\nbar\n</code></pre>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '\n    \n    foo\n    \n\n',
    html: '<pre><code>foo\n</code></pre>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '    foo  \n',
    html: '<pre><code>foo  \n</code></pre>\n',
    section: 'Indented code blocks'
  },
  {
    markdown: '```\n<\n >\n```\n',
    html: '<pre><code>&lt;\n &gt;\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '~~~\n<\n >\n~~~\n',
    html: '<pre><code>&lt;\n &gt;\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '``\nfoo\n``\n',
    html: '<p><code>foo</code></p>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '```\naaa\n~~~\n```\n',
    html: '<pre><code>aaa\n~~~\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '~~~\naaa\n```\n~~~\n',
    html: '<pre><code>aaa\n```\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '````\naaa\n```\n``````\n',
    html: '<pre><code>aaa\n```\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '~~~~\naaa\n~~~\n~~~~\n',
    html: '<pre><code>aaa\n~~~\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '```\n',
    html: '<pre><code></code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '`````\n\n```\naaa\n',
    html: '<pre><code>\n```\naaa\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '> ```\n> aaa\n\nbbb\n',
    html: '<blockquote>\n<pre><code>aaa\n</code></pre>\n</blockquote>\n<p>bbb</p>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '```\n\n  \n```\n',
    html: '<pre><code>\n  \n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '```\n```\n',
    html: '<pre><code></code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: ' ```\n aaa\naaa\n```\n',
    html: '<pre><code>aaa\naaa\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '  ```\naaa\n  aaa\naaa\n  ```\n',
    html: '<pre><code>aaa\naaa\naaa\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '   ```\n   aaa\n    aaa\n  aaa\n   ```\n',
    html: '<pre><code>aaa\n aaa\naaa\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '    ```\n    aaa\n    ```\n',
    html: '<pre><code>```\naaa\n```\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '```\naaa\n  ```\n',
    html: '<pre><code>aaa\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '   ```\naaa\n  ```\n',
    html: '<pre><code>aaa\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '```\naaa\n    ```\n',
    html: '<pre><code>aaa\n    ```\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '``` ```\naaa\n',
    html: '<p><code> </code>\naaa</p>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '~~~~~~\naaa\n~~~ ~~\n',
    html: '<pre><code>aaa\n~~~ ~~\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: 'foo\n```\nbar\n```\nbaz\n',
    html: '<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: 'foo\n---\n~~~\nbar\n~~~\n# baz\n',
    html: '<h2>foo</h2>\n<pre><code>bar\n</code></pre>\n<h1>baz</h1>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '```ruby\ndef foo(x)\n  return 3\nend\n```\n',
    html: '<pre><code class="language-ruby">def foo(x)\n  return 3\nend\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown:
      '~~~~    ruby startline=3 $%@#$\ndef foo(x)\n  return 3\nend\n~~~~~~~\n',
    html: '<pre><code class="language-ruby">def foo(x)\n  return 3\nend\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '````;\n````\n',
    html: '<pre><code class="language-;"></code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '``` aa ```\nfoo\n',
    html: '<p><code>aa</code>\nfoo</p>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '~~~ aa ``` ~~~\nfoo\n~~~\n',
    html: '<pre><code class="language-aa">foo\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown: '```\n``` aaa\n```\n',
    html: '<pre><code>``` aaa\n</code></pre>\n',
    section: 'Fenced code blocks'
  },
  {
    markdown:
      '<table><tr><td>\n<pre>\n**Hello**,\n\n_world_.\n</pre>\n</td></tr></table>\n',
    html: '<table><tr><td>\n<pre>\n**Hello**,\n<p><em>world</em>.\n</pre></p>\n</td></tr></table>\n',
    section: 'HTML blocks'
  },
  {
    markdown:
      '<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n\nokay.\n',
    html: '<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n<p>okay.</p>\n',
    section: 'HTML blocks'
  },
  {
    markdown: ' <div>\n  *hello*\n         <foo><a>\n',
    html: ' <div>\n  *hello*\n         <foo><a>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '</div>\n*foo*\n',
    html: '</div>\n*foo*\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<DIV CLASS="foo">\n\n*Markdown*\n\n</DIV>\n',
    html: '<DIV CLASS="foo">\n<p><em>Markdown</em></p>\n</DIV>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div id="foo"\n  class="bar">\n</div>\n',
    html: '<div id="foo"\n  class="bar">\n</div>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div id="foo" class="bar\n  baz">\n</div>\n',
    html: '<div id="foo" class="bar\n  baz">\n</div>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div>\n*foo*\n\n*bar*\n',
    html: '<div>\n*foo*\n<p><em>bar</em></p>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div id="foo"\n*hi*\n',
    html: '<div id="foo"\n*hi*\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div class\nfoo\n',
    html: '<div class\nfoo\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div *???-&&&-<---\n*foo*\n',
    html: '<div *???-&&&-<---\n*foo*\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div><a href="bar">*foo*</a></div>\n',
    html: '<div><a href="bar">*foo*</a></div>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<table><tr><td>\nfoo\n</td></tr></table>\n',
    html: '<table><tr><td>\nfoo\n</td></tr></table>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div></div>\n``` c\nint x = 33;\n```\n',
    html: '<div></div>\n``` c\nint x = 33;\n```\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<a href="foo">\n*bar*\n</a>\n',
    html: '<a href="foo">\n*bar*\n</a>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<Warning>\n*bar*\n</Warning>\n',
    html: '<Warning>\n*bar*\n</Warning>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<i class="foo">\n*bar*\n</i>\n',
    html: '<i class="foo">\n*bar*\n</i>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '</ins>\n*bar*\n',
    html: '</ins>\n*bar*\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<del>\n*foo*\n</del>\n',
    html: '<del>\n*foo*\n</del>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<del>\n\n*foo*\n\n</del>\n',
    html: '<del>\n<p><em>foo</em></p>\n</del>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<del>*foo*</del>\n',
    html: '<p><del><em>foo</em></del></p>\n',
    section: 'HTML blocks'
  },
  {
    markdown:
      '<pre language="haskell"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n',
    html: '<pre language="haskell"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\n<p>okay</p>\n',
    section: 'HTML blocks'
  },
  {
    markdown:
      '<script type="text/javascript">\n// JavaScript example\n\ndocument.getElementById("demo").innerHTML = "Hello JavaScript!";\n</script>\nokay\n',
    html: '<script type="text/javascript">\n// JavaScript example\n\ndocument.getElementById("demo").innerHTML = "Hello JavaScript!";\n</script>\n<p>okay</p>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<textarea>\n\n*foo*\n\n_bar_\n\n</textarea>\n',
    html: '<textarea>\n\n*foo*\n\n_bar_\n\n</textarea>\n',
    section: 'HTML blocks'
  },
  {
    markdown:
      '<style\n  type="text/css">\nh1 {color:red;}\n\np {color:blue;}\n</style>\nokay\n',
    html: '<style\n  type="text/css">\nh1 {color:red;}\n\np {color:blue;}\n</style>\n<p>okay</p>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<style\n  type="text/css">\n\nfoo\n',
    html: '<style\n  type="text/css">\n\nfoo\n',
    section: 'HTML blocks'
  },
  {
    markdown: '> <div>\n> foo\n\nbar\n',
    html: '<blockquote>\n<div>\nfoo\n</blockquote>\n<p>bar</p>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '- <div>\n- foo\n',
    html: '<ul>\n<li>\n<div>\n</li>\n<li>foo</li>\n</ul>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<style>p{color:red;}</style>\n*foo*\n',
    html: '<style>p{color:red;}</style>\n<p><em>foo</em></p>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<!-- foo -->*bar*\n*baz*\n',
    html: '<!-- foo -->*bar*\n<p><em>baz</em></p>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<script>\nfoo\n</script>1. *bar*\n',
    html: '<script>\nfoo\n</script>1. *bar*\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<!-- Foo\n\nbar\n   baz -->\nokay\n',
    html: '<!-- Foo\n\nbar\n   baz -->\n<p>okay</p>\n',
    section: 'HTML blocks'
  },
  {
    markdown: "<?php\n\n  echo '>';\n\n?>\nokay\n",
    html: "<?php\n\n  echo '>';\n\n?>\n<p>okay</p>\n",
    section: 'HTML blocks'
  },
  {
    markdown: '<!DOCTYPE html>\n',
    html: '<!DOCTYPE html>\n',
    section: 'HTML blocks'
  },
  {
    markdown:
      '<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\nokay\n',
    html: '<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\n<p>okay</p>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '  <!-- foo -->\n\n    <!-- foo -->\n',
    html: '  <!-- foo -->\n<pre><code>&lt;!-- foo --&gt;\n</code></pre>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '  <div>\n\n    <div>\n',
    html: '  <div>\n<pre><code>&lt;div&gt;\n</code></pre>\n',
    section: 'HTML blocks'
  },
  {
    markdown: 'Foo\n<div>\nbar\n</div>\n',
    html: '<p>Foo</p>\n<div>\nbar\n</div>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div>\nbar\n</div>\n*foo*\n',
    html: '<div>\nbar\n</div>\n*foo*\n',
    section: 'HTML blocks'
  },
  {
    markdown: 'Foo\n<a href="bar">\nbaz\n',
    html: '<p>Foo\n<a href="bar">\nbaz</p>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div>\n\n*Emphasized* text.\n\n</div>\n',
    html: '<div>\n<p><em>Emphasized</em> text.</p>\n</div>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<div>\n*Emphasized* text.\n</div>\n',
    html: '<div>\n*Emphasized* text.\n</div>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '<table>\n\n<tr>\n\n<td>\nHi\n</td>\n\n</tr>\n\n</table>\n',
    html: '<table>\n<tr>\n<td>\nHi\n</td>\n</tr>\n</table>\n',
    section: 'HTML blocks'
  },
  {
    markdown:
      '<table>\n\n  <tr>\n\n    <td>\n      Hi\n    </td>\n\n  </tr>\n\n</table>\n',
    html: '<table>\n  <tr>\n<pre><code>&lt;td&gt;\n  Hi\n&lt;/td&gt;\n</code></pre>\n  </tr>\n</table>\n',
    section: 'HTML blocks'
  },
  {
    markdown: '[foo]: /url "title"\n\n[foo]\n',
    html: '<p><a href="/url" title="title">foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: "   [foo]: \n      /url  \n           'the title'  \n\n[foo]\n",
    html: '<p><a href="/url" title="the title">foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: "[Foo*bar\\]]:my_(url) 'title (with parens)'\n\n[Foo*bar\\]]\n",
    html: '<p><a href="my_(url)" title="title (with parens)">Foo*bar]</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: "[Foo bar]:\n<my url>\n'title'\n\n[Foo bar]\n",
    html: '<p><a href="my%20url" title="title">Foo bar</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: "[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n",
    html: '<p><a href="/url" title="\ntitle\nline1\nline2\n">foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: "[foo]: /url 'title\n\nwith blank line'\n\n[foo]\n",
    html: "<p>[foo]: /url 'title</p>\n<p>with blank line'</p>\n<p>[foo]</p>\n",
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]:\n/url\n\n[foo]\n',
    html: '<p><a href="/url">foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]:\n\n[foo]\n',
    html: '<p>[foo]:</p>\n<p>[foo]</p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]: <>\n\n[foo]\n',
    html: '<p><a href="">foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]: <bar>(baz)\n\n[foo]\n',
    html: '<p>[foo]: <bar>(baz)</p>\n<p>[foo]</p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]: /url\\bar\\*baz "foo\\"bar\\baz"\n\n[foo]\n',
    html: '<p><a href="/url%5Cbar*baz" title="foo&quot;bar\\baz">foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]\n\n[foo]: url\n',
    html: '<p><a href="url">foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]\n\n[foo]: first\n[foo]: second\n',
    html: '<p><a href="first">foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[FOO]: /url\n\n[Foo]\n',
    html: '<p><a href="/url">Foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[ΑΓΩ]: /φου\n\n[αγω]\n',
    html: '<p><a href="/%CF%86%CE%BF%CF%85">αγω</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]: /url\n',
    html: '',
    section: 'Link reference definitions'
  },
  {
    markdown: '[\nfoo\n]: /url\nbar\n',
    html: '<p>bar</p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]: /url "title" ok\n',
    html: '<p>[foo]: /url &quot;title&quot; ok</p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]: /url\n"title" ok\n',
    html: '<p>&quot;title&quot; ok</p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '    [foo]: /url "title"\n\n[foo]\n',
    html: '<pre><code>[foo]: /url &quot;title&quot;\n</code></pre>\n<p>[foo]</p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '```\n[foo]: /url\n```\n\n[foo]\n',
    html: '<pre><code>[foo]: /url\n</code></pre>\n<p>[foo]</p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: 'Foo\n[bar]: /baz\n\n[bar]\n',
    html: '<p>Foo\n[bar]: /baz</p>\n<p>[bar]</p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '# [Foo]\n[foo]: /url\n> bar\n',
    html: '<h1><a href="/url">Foo</a></h1>\n<blockquote>\n<p>bar</p>\n</blockquote>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]: /url\nbar\n===\n[foo]\n',
    html: '<h1>bar</h1>\n<p><a href="/url">foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]: /url\n===\n[foo]\n',
    html: '<p>===\n<a href="/url">foo</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown:
      '[foo]: /foo-url "foo"\n[bar]: /bar-url\n  "bar"\n[baz]: /baz-url\n\n[foo],\n[bar],\n[baz]\n',
    html: '<p><a href="/foo-url" title="foo">foo</a>,\n<a href="/bar-url" title="bar">bar</a>,\n<a href="/baz-url">baz</a></p>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: '[foo]\n\n> [foo]: /url\n',
    html: '<p><a href="/url">foo</a></p>\n<blockquote>\n</blockquote>\n',
    section: 'Link reference definitions'
  },
  {
    markdown: 'aaa\n\nbbb\n',
    html: '<p>aaa</p>\n<p>bbb</p>\n',
    section: 'Paragraphs'
  },
  {
    markdown: 'aaa\nbbb\n\nccc\nddd\n',
    html: '<p>aaa\nbbb</p>\n<p>ccc\nddd</p>\n',
    section: 'Paragraphs'
  },
  {
    markdown: 'aaa\n\n\nbbb\n',
    html: '<p>aaa</p>\n<p>bbb</p>\n',
    section: 'Paragraphs'
  },
  {
    markdown: '  aaa\n bbb\n',
    html: '<p>aaa\nbbb</p>\n',
    section: 'Paragraphs'
  },
  {
    markdown:
      'aaa\n             bbb\n                                       ccc\n',
    html: '<p>aaa\nbbb\nccc</p>\n',
    section: 'Paragraphs'
  },
  {
    markdown: '   aaa\nbbb\n',
    html: '<p>aaa\nbbb</p>\n',
    section: 'Paragraphs'
  },
  {
    markdown: '    aaa\nbbb\n',
    html: '<pre><code>aaa\n</code></pre>\n<p>bbb</p>\n',
    section: 'Paragraphs'
  },
  {
    markdown: 'aaa     \nbbb     \n',
    html: '<p>aaa<br />\nbbb</p>\n',
    section: 'Paragraphs'
  },
  {
    markdown: '  \n\naaa\n  \n\n# aaa\n\n  \n',
    html: '<p>aaa</p>\n<h1>aaa</h1>\n',
    section: 'Blank lines'
  },
  {
    markdown: '> # Foo\n> bar\n> baz\n',
    html: '<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '># Foo\n>bar\n> baz\n',
    html: '<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '   > # Foo\n   > bar\n > baz\n',
    html: '<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '    > # Foo\n    > bar\n    > baz\n',
    html: '<pre><code>&gt; # Foo\n&gt; bar\n&gt; baz\n</code></pre>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> # Foo\n> bar\nbaz\n',
    html: '<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> bar\nbaz\n> foo\n',
    html: '<blockquote>\n<p>bar\nbaz\nfoo</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> foo\n---\n',
    html: '<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n',
    section: 'Block quotes'
  },
  {
    markdown: '> - foo\n- bar\n',
    html: '<blockquote>\n<ul>\n<li>foo</li>\n</ul>\n</blockquote>\n<ul>\n<li>bar</li>\n</ul>\n',
    section: 'Block quotes'
  },
  {
    markdown: '>     foo\n    bar\n',
    html: '<blockquote>\n<pre><code>foo\n</code></pre>\n</blockquote>\n<pre><code>bar\n</code></pre>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> ```\nfoo\n```\n',
    html: '<blockquote>\n<pre><code></code></pre>\n</blockquote>\n<p>foo</p>\n<pre><code></code></pre>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> foo\n    - bar\n',
    html: '<blockquote>\n<p>foo\n- bar</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '>\n',
    html: '<blockquote>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '>\n>  \n> \n',
    html: '<blockquote>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '>\n> foo\n>  \n',
    html: '<blockquote>\n<p>foo</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> foo\n\n> bar\n',
    html: '<blockquote>\n<p>foo</p>\n</blockquote>\n<blockquote>\n<p>bar</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> foo\n> bar\n',
    html: '<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> foo\n>\n> bar\n',
    html: '<blockquote>\n<p>foo</p>\n<p>bar</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: 'foo\n> bar\n',
    html: '<p>foo</p>\n<blockquote>\n<p>bar</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> aaa\n***\n> bbb\n',
    html: '<blockquote>\n<p>aaa</p>\n</blockquote>\n<hr />\n<blockquote>\n<p>bbb</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> bar\nbaz\n',
    html: '<blockquote>\n<p>bar\nbaz</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> bar\n\nbaz\n',
    html: '<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> bar\n>\nbaz\n',
    html: '<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n',
    section: 'Block quotes'
  },
  {
    markdown: '> > > foo\nbar\n',
    html: '<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n</blockquote>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '>>> foo\n> bar\n>>baz\n',
    html: '<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar\nbaz</p>\n</blockquote>\n</blockquote>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown: '>     code\n\n>    not code\n',
    html: '<blockquote>\n<pre><code>code\n</code></pre>\n</blockquote>\n<blockquote>\n<p>not code</p>\n</blockquote>\n',
    section: 'Block quotes'
  },
  {
    markdown:
      'A paragraph\nwith two lines.\n\n    indented code\n\n> A block quote.\n',
    html: '<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n',
    section: 'List items'
  },
  {
    markdown:
      '1.  A paragraph\n    with two lines.\n\n        indented code\n\n    > A block quote.\n',
    html: '<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '- one\n\n two\n',
    html: '<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n',
    section: 'List items'
  },
  {
    markdown: '- one\n\n  two\n',
    html: '<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: ' -    one\n\n     two\n',
    html: '<ul>\n<li>one</li>\n</ul>\n<pre><code> two\n</code></pre>\n',
    section: 'List items'
  },
  {
    markdown: ' -    one\n\n      two\n',
    html: '<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '   > > 1.  one\n>>\n>>     two\n',
    html: '<blockquote>\n<blockquote>\n<ol>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ol>\n</blockquote>\n</blockquote>\n',
    section: 'List items'
  },
  {
    markdown: '>>- one\n>>\n  >  > two\n',
    html: '<blockquote>\n<blockquote>\n<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n</blockquote>\n</blockquote>\n',
    section: 'List items'
  },
  {
    markdown: '-one\n\n2.two\n',
    html: '<p>-one</p>\n<p>2.two</p>\n',
    section: 'List items'
  },
  {
    markdown: '- foo\n\n\n  bar\n',
    html: '<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '1.  foo\n\n    ```\n    bar\n    ```\n\n    baz\n\n    > bam\n',
    html: '<ol>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n<blockquote>\n<p>bam</p>\n</blockquote>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '- Foo\n\n      bar\n\n\n      baz\n',
    html: '<ul>\n<li>\n<p>Foo</p>\n<pre><code>bar\n\n\nbaz\n</code></pre>\n</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '123456789. ok\n',
    html: '<ol start="123456789">\n<li>ok</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '1234567890. not ok\n',
    html: '<p>1234567890. not ok</p>\n',
    section: 'List items'
  },
  {
    markdown: '0. ok\n',
    html: '<ol start="0">\n<li>ok</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '003. ok\n',
    html: '<ol start="3">\n<li>ok</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '-1. not ok\n',
    html: '<p>-1. not ok</p>\n',
    section: 'List items'
  },
  {
    markdown: '- foo\n\n      bar\n',
    html: '<ul>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '  10.  foo\n\n           bar\n',
    html: '<ol start="10">\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '    indented code\n\nparagraph\n\n    more code\n',
    html: '<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n',
    section: 'List items'
  },
  {
    markdown: '1.     indented code\n\n   paragraph\n\n       more code\n',
    html: '<ol>\n<li>\n<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '1.      indented code\n\n   paragraph\n\n       more code\n',
    html: '<ol>\n<li>\n<pre><code> indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '   foo\n\nbar\n',
    html: '<p>foo</p>\n<p>bar</p>\n',
    section: 'List items'
  },
  {
    markdown: '-    foo\n\n  bar\n',
    html: '<ul>\n<li>foo</li>\n</ul>\n<p>bar</p>\n',
    section: 'List items'
  },
  {
    markdown: '-  foo\n\n   bar\n',
    html: '<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '-\n  foo\n-\n  ```\n  bar\n  ```\n-\n      baz\n',
    html: '<ul>\n<li>foo</li>\n<li>\n<pre><code>bar\n</code></pre>\n</li>\n<li>\n<pre><code>baz\n</code></pre>\n</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '-   \n  foo\n',
    html: '<ul>\n<li>foo</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '-\n\n  foo\n',
    html: '<ul>\n<li></li>\n</ul>\n<p>foo</p>\n',
    section: 'List items'
  },
  {
    markdown: '- foo\n-\n- bar\n',
    html: '<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '- foo\n-   \n- bar\n',
    html: '<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '1. foo\n2.\n3. bar\n',
    html: '<ol>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '*\n',
    html: '<ul>\n<li></li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: 'foo\n*\n\nfoo\n1.\n',
    html: '<p>foo\n*</p>\n<p>foo\n1.</p>\n',
    section: 'List items'
  },
  {
    markdown:
      ' 1.  A paragraph\n     with two lines.\n\n         indented code\n\n     > A block quote.\n',
    html: '<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown:
      '  1.  A paragraph\n      with two lines.\n\n          indented code\n\n      > A block quote.\n',
    html: '<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown:
      '   1.  A paragraph\n       with two lines.\n\n           indented code\n\n       > A block quote.\n',
    html: '<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown:
      '    1.  A paragraph\n        with two lines.\n\n            indented code\n\n        > A block quote.\n',
    html: '<pre><code>1.  A paragraph\n    with two lines.\n\n        indented code\n\n    &gt; A block quote.\n</code></pre>\n',
    section: 'List items'
  },
  {
    markdown:
      '  1.  A paragraph\nwith two lines.\n\n          indented code\n\n      > A block quote.\n',
    html: '<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '  1.  A paragraph\n    with two lines.\n',
    html: '<ol>\n<li>A paragraph\nwith two lines.</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '> 1. > Blockquote\ncontinued here.\n',
    html: '<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n',
    section: 'List items'
  },
  {
    markdown: '> 1. > Blockquote\n> continued here.\n',
    html: '<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n',
    section: 'List items'
  },
  {
    markdown: '- foo\n  - bar\n    - baz\n      - boo\n',
    html: '<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz\n<ul>\n<li>boo</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '- foo\n - bar\n  - baz\n   - boo\n',
    html: '<ul>\n<li>foo</li>\n<li>bar</li>\n<li>baz</li>\n<li>boo</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '10) foo\n    - bar\n',
    html: '<ol start="10">\n<li>foo\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '10) foo\n   - bar\n',
    html: '<ol start="10">\n<li>foo</li>\n</ol>\n<ul>\n<li>bar</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '- - foo\n',
    html: '<ul>\n<li>\n<ul>\n<li>foo</li>\n</ul>\n</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '1. - 2. foo\n',
    html: '<ol>\n<li>\n<ul>\n<li>\n<ol start="2">\n<li>foo</li>\n</ol>\n</li>\n</ul>\n</li>\n</ol>\n',
    section: 'List items'
  },
  {
    markdown: '- # Foo\n- Bar\n  ---\n  baz\n',
    html: '<ul>\n<li>\n<h1>Foo</h1>\n</li>\n<li>\n<h2>Bar</h2>\nbaz</li>\n</ul>\n',
    section: 'List items'
  },
  {
    markdown: '- foo\n- bar\n+ baz\n',
    html: '<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<ul>\n<li>baz</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '1. foo\n2. bar\n3) baz\n',
    html: '<ol>\n<li>foo</li>\n<li>bar</li>\n</ol>\n<ol start="3">\n<li>baz</li>\n</ol>\n',
    section: 'Lists'
  },
  {
    markdown: 'Foo\n- bar\n- baz\n',
    html: '<p>Foo</p>\n<ul>\n<li>bar</li>\n<li>baz</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown:
      'The number of windows in my house is\n14.  The number of doors is 6.\n',
    html: '<p>The number of windows in my house is\n14.  The number of doors is 6.</p>\n',
    section: 'Lists'
  },
  {
    markdown:
      'The number of windows in my house is\n1.  The number of doors is 6.\n',
    html: '<p>The number of windows in my house is</p>\n<ol>\n<li>The number of doors is 6.</li>\n</ol>\n',
    section: 'Lists'
  },
  {
    markdown: '- foo\n\n- bar\n\n\n- baz\n',
    html: '<ul>\n<li>\n<p>foo</p>\n</li>\n<li>\n<p>bar</p>\n</li>\n<li>\n<p>baz</p>\n</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '- foo\n  - bar\n    - baz\n\n\n      bim\n',
    html: '<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>\n<p>baz</p>\n<p>bim</p>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '- foo\n- bar\n\n<!-- -->\n\n- baz\n- bim\n',
    html: '<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<!-- -->\n<ul>\n<li>baz</li>\n<li>bim</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '-   foo\n\n    notcode\n\n-   foo\n\n<!-- -->\n\n    code\n',
    html: '<ul>\n<li>\n<p>foo</p>\n<p>notcode</p>\n</li>\n<li>\n<p>foo</p>\n</li>\n</ul>\n<!-- -->\n<pre><code>code\n</code></pre>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n - b\n  - c\n   - d\n  - e\n - f\n- g\n',
    html: '<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n<li>d</li>\n<li>e</li>\n<li>f</li>\n<li>g</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '1. a\n\n  2. b\n\n   3. c\n',
    html: '<ol>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ol>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n - b\n  - c\n   - d\n    - e\n',
    html: '<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n<li>d\n- e</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '1. a\n\n  2. b\n\n    3. c\n',
    html: '<ol>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n</ol>\n<pre><code>3. c\n</code></pre>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n- b\n\n- c\n',
    html: '<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '* a\n*\n\n* c\n',
    html: '<ul>\n<li>\n<p>a</p>\n</li>\n<li></li>\n<li>\n<p>c</p>\n</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n- b\n\n  c\n- d\n',
    html: '<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n- b\n\n  [ref]: /url\n- d\n',
    html: '<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n- ```\n  b\n\n\n  ```\n- c\n',
    html: '<ul>\n<li>a</li>\n<li>\n<pre><code>b\n\n\n</code></pre>\n</li>\n<li>c</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n  - b\n\n    c\n- d\n',
    html: '<ul>\n<li>a\n<ul>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n</ul>\n</li>\n<li>d</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '* a\n  > b\n  >\n* c\n',
    html: '<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n</li>\n<li>c</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n  > b\n  ```\n  c\n  ```\n- d\n',
    html: '<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n<pre><code>c\n</code></pre>\n</li>\n<li>d</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n',
    html: '<ul>\n<li>a</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n  - b\n',
    html: '<ul>\n<li>a\n<ul>\n<li>b</li>\n</ul>\n</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '1. ```\n   foo\n   ```\n\n   bar\n',
    html: '<ol>\n<li>\n<pre><code>foo\n</code></pre>\n<p>bar</p>\n</li>\n</ol>\n',
    section: 'Lists'
  },
  {
    markdown: '* foo\n  * bar\n\n  baz\n',
    html: '<ul>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n<p>baz</p>\n</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '- a\n  - b\n  - c\n\n- d\n  - e\n  - f\n',
    html: '<ul>\n<li>\n<p>a</p>\n<ul>\n<li>b</li>\n<li>c</li>\n</ul>\n</li>\n<li>\n<p>d</p>\n<ul>\n<li>e</li>\n<li>f</li>\n</ul>\n</li>\n</ul>\n',
    section: 'Lists'
  },
  {
    markdown: '`hi`lo`\n',
    html: '<p><code>hi</code>lo`</p>\n',
    section: 'Inlines'
  },
  {
    markdown: '`foo`\n',
    html: '<p><code>foo</code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '`` foo ` bar ``\n',
    html: '<p><code>foo ` bar</code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '` `` `\n',
    html: '<p><code>``</code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '`  ``  `\n',
    html: '<p><code> `` </code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '` a`\n',
    html: '<p><code> a</code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '` b `\n',
    html: '<p><code> b </code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '` `\n`  `\n',
    html: '<p><code> </code>\n<code>  </code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '``\nfoo\nbar  \nbaz\n``\n',
    html: '<p><code>foo bar   baz</code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '``\nfoo \n``\n',
    html: '<p><code>foo </code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '`foo   bar \nbaz`\n',
    html: '<p><code>foo   bar  baz</code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '`foo\\`bar`\n',
    html: '<p><code>foo\\</code>bar`</p>\n',
    section: 'Code spans'
  },
  {
    markdown: '``foo`bar``\n',
    html: '<p><code>foo`bar</code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '` foo `` bar `\n',
    html: '<p><code>foo `` bar</code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '*foo`*`\n',
    html: '<p>*foo<code>*</code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '[not a `link](/foo`)\n',
    html: '<p>[not a <code>link](/foo</code>)</p>\n',
    section: 'Code spans'
  },
  {
    markdown: '`<a href="`">`\n',
    html: '<p><code>&lt;a href=&quot;</code>&quot;&gt;`</p>\n',
    section: 'Code spans'
  },
  {
    markdown: '<a href="`">`\n',
    html: '<p><a href="`">`</p>\n',
    section: 'Code spans'
  },
  {
    markdown: '`<https://foo.bar.`baz>`\n',
    html: '<p><code>&lt;https://foo.bar.</code>baz&gt;`</p>\n',
    section: 'Code spans'
  },
  {
    markdown: '<https://foo.bar.`baz>`\n',
    html: '<p><a href="https://foo.bar.%60baz">https://foo.bar.`baz</a>`</p>\n',
    section: 'Code spans'
  },
  {
    markdown: '```foo``\n',
    html: '<p>```foo``</p>\n',
    section: 'Code spans'
  },
  {
    markdown: '`foo\n',
    html: '<p>`foo</p>\n',
    section: 'Code spans'
  },
  {
    markdown: '`foo``bar``\n',
    html: '<p>`foo<code>bar</code></p>\n',
    section: 'Code spans'
  },
  {
    markdown: '*foo bar*\n',
    html: '<p><em>foo bar</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'a * foo bar*\n',
    html: '<p>a * foo bar*</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'a*"foo"*\n',
    html: '<p>a*&quot;foo&quot;*</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '* a *\n',
    html: '<p>* a *</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*$*alpha.\n\n*£*bravo.\n\n*€*charlie.\n',
    html: '<p>*$*alpha.</p>\n<p>*£*bravo.</p>\n<p>*€*charlie.</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo*bar*\n',
    html: '<p>foo<em>bar</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '5*6*78\n',
    html: '<p>5<em>6</em>78</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_foo bar_\n',
    html: '<p><em>foo bar</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_ foo bar_\n',
    html: '<p>_ foo bar_</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'a_"foo"_\n',
    html: '<p>a_&quot;foo&quot;_</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo_bar_\n',
    html: '<p>foo_bar_</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '5_6_78\n',
    html: '<p>5_6_78</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'пристаням_стремятся_\n',
    html: '<p>пристаням_стремятся_</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'aa_"bb"_cc\n',
    html: '<p>aa_&quot;bb&quot;_cc</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo-_(bar)_\n',
    html: '<p>foo-<em>(bar)</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_foo*\n',
    html: '<p>_foo*</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo bar *\n',
    html: '<p>*foo bar *</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo bar\n*\n',
    html: '<p>*foo bar\n*</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*(*foo)\n',
    html: '<p>*(*foo)</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*(*foo*)*\n',
    html: '<p><em>(<em>foo</em>)</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo*bar\n',
    html: '<p><em>foo</em>bar</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_foo bar _\n',
    html: '<p>_foo bar _</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_(_foo)\n',
    html: '<p>_(_foo)</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_(_foo_)_\n',
    html: '<p><em>(<em>foo</em>)</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_foo_bar\n',
    html: '<p>_foo_bar</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_пристаням_стремятся\n',
    html: '<p>_пристаням_стремятся</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_foo_bar_baz_\n',
    html: '<p><em>foo_bar_baz</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_(bar)_.\n',
    html: '<p><em>(bar)</em>.</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo bar**\n',
    html: '<p><strong>foo bar</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '** foo bar**\n',
    html: '<p>** foo bar**</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'a**"foo"**\n',
    html: '<p>a**&quot;foo&quot;**</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo**bar**\n',
    html: '<p>foo<strong>bar</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo bar__\n',
    html: '<p><strong>foo bar</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__ foo bar__\n',
    html: '<p>__ foo bar__</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__\nfoo bar__\n',
    html: '<p>__\nfoo bar__</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'a__"foo"__\n',
    html: '<p>a__&quot;foo&quot;__</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo__bar__\n',
    html: '<p>foo__bar__</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '5__6__78\n',
    html: '<p>5__6__78</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'пристаням__стремятся__\n',
    html: '<p>пристаням__стремятся__</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo, __bar__, baz__\n',
    html: '<p><strong>foo, <strong>bar</strong>, baz</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo-__(bar)__\n',
    html: '<p>foo-<strong>(bar)</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo bar **\n',
    html: '<p>**foo bar **</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**(**foo)\n',
    html: '<p>**(**foo)</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*(**foo**)*\n',
    html: '<p><em>(<strong>foo</strong>)</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown:
      '**Gomphocarpus (*Gomphocarpus physocarpus*, syn.\n*Asclepias physocarpa*)**\n',
    html: '<p><strong>Gomphocarpus (<em>Gomphocarpus physocarpus</em>, syn.\n<em>Asclepias physocarpa</em>)</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo "*bar*" foo**\n',
    html: '<p><strong>foo &quot;<em>bar</em>&quot; foo</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo**bar\n',
    html: '<p><strong>foo</strong>bar</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo bar __\n',
    html: '<p>__foo bar __</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__(__foo)\n',
    html: '<p>__(__foo)</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_(__foo__)_\n',
    html: '<p><em>(<strong>foo</strong>)</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo__bar\n',
    html: '<p>__foo__bar</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__пристаням__стремятся\n',
    html: '<p>__пристаням__стремятся</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo__bar__baz__\n',
    html: '<p><strong>foo__bar__baz</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__(bar)__.\n',
    html: '<p><strong>(bar)</strong>.</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo [bar](/url)*\n',
    html: '<p><em>foo <a href="/url">bar</a></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo\nbar*\n',
    html: '<p><em>foo\nbar</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_foo __bar__ baz_\n',
    html: '<p><em>foo <strong>bar</strong> baz</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_foo _bar_ baz_\n',
    html: '<p><em>foo <em>bar</em> baz</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo_ bar_\n',
    html: '<p><em><em>foo</em> bar</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo *bar**\n',
    html: '<p><em>foo <em>bar</em></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo **bar** baz*\n',
    html: '<p><em>foo <strong>bar</strong> baz</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo**bar**baz*\n',
    html: '<p><em>foo<strong>bar</strong>baz</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo**bar*\n',
    html: '<p><em>foo**bar</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '***foo** bar*\n',
    html: '<p><em><strong>foo</strong> bar</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo **bar***\n',
    html: '<p><em>foo <strong>bar</strong></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo**bar***\n',
    html: '<p><em>foo<strong>bar</strong></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo***bar***baz\n',
    html: '<p>foo<em><strong>bar</strong></em>baz</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo******bar*********baz\n',
    html: '<p>foo<strong><strong><strong>bar</strong></strong></strong>***baz</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo **bar *baz* bim** bop*\n',
    html: '<p><em>foo <strong>bar <em>baz</em> bim</strong> bop</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo [*bar*](/url)*\n',
    html: '<p><em>foo <a href="/url"><em>bar</em></a></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '** is not an empty emphasis\n',
    html: '<p>** is not an empty emphasis</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**** is not an empty strong emphasis\n',
    html: '<p>**** is not an empty strong emphasis</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo [bar](/url)**\n',
    html: '<p><strong>foo <a href="/url">bar</a></strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo\nbar**\n',
    html: '<p><strong>foo\nbar</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo _bar_ baz__\n',
    html: '<p><strong>foo <em>bar</em> baz</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo __bar__ baz__\n',
    html: '<p><strong>foo <strong>bar</strong> baz</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '____foo__ bar__\n',
    html: '<p><strong><strong>foo</strong> bar</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo **bar****\n',
    html: '<p><strong>foo <strong>bar</strong></strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo *bar* baz**\n',
    html: '<p><strong>foo <em>bar</em> baz</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo*bar*baz**\n',
    html: '<p><strong>foo<em>bar</em>baz</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '***foo* bar**\n',
    html: '<p><strong><em>foo</em> bar</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo *bar***\n',
    html: '<p><strong>foo <em>bar</em></strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo *bar **baz**\nbim* bop**\n',
    html: '<p><strong>foo <em>bar <strong>baz</strong>\nbim</em> bop</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo [*bar*](/url)**\n',
    html: '<p><strong>foo <a href="/url"><em>bar</em></a></strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__ is not an empty emphasis\n',
    html: '<p>__ is not an empty emphasis</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '____ is not an empty strong emphasis\n',
    html: '<p>____ is not an empty strong emphasis</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo ***\n',
    html: '<p>foo ***</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo *\\**\n',
    html: '<p>foo <em>*</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo *_*\n',
    html: '<p>foo <em>_</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo *****\n',
    html: '<p>foo *****</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo **\\***\n',
    html: '<p>foo <strong>*</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo **_**\n',
    html: '<p>foo <strong>_</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo*\n',
    html: '<p>*<em>foo</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo**\n',
    html: '<p><em>foo</em>*</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '***foo**\n',
    html: '<p>*<strong>foo</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '****foo*\n',
    html: '<p>***<em>foo</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo***\n',
    html: '<p><strong>foo</strong>*</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo****\n',
    html: '<p><em>foo</em>***</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo ___\n',
    html: '<p>foo ___</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo _\\__\n',
    html: '<p>foo <em>_</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo _*_\n',
    html: '<p>foo <em>*</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo _____\n',
    html: '<p>foo _____</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo __\\___\n',
    html: '<p>foo <strong>_</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: 'foo __*__\n',
    html: '<p>foo <strong>*</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo_\n',
    html: '<p>_<em>foo</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_foo__\n',
    html: '<p><em>foo</em>_</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '___foo__\n',
    html: '<p>_<strong>foo</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '____foo_\n',
    html: '<p>___<em>foo</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo___\n',
    html: '<p><strong>foo</strong>_</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_foo____\n',
    html: '<p><em>foo</em>___</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo**\n',
    html: '<p><strong>foo</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*_foo_*\n',
    html: '<p><em><em>foo</em></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__foo__\n',
    html: '<p><strong>foo</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_*foo*_\n',
    html: '<p><em><em>foo</em></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '****foo****\n',
    html: '<p><strong><strong>foo</strong></strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '____foo____\n',
    html: '<p><strong><strong>foo</strong></strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '******foo******\n',
    html: '<p><strong><strong><strong>foo</strong></strong></strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '***foo***\n',
    html: '<p><em><strong>foo</strong></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_____foo_____\n',
    html: '<p><em><strong><strong>foo</strong></strong></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo _bar* baz_\n',
    html: '<p><em>foo _bar</em> baz_</p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo __bar *baz bim__ bam*\n',
    html: '<p><em>foo <strong>bar *baz bim</strong> bam</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**foo **bar baz**\n',
    html: '<p>**foo <strong>bar baz</strong></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*foo *bar baz*\n',
    html: '<p>*foo <em>bar baz</em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*[bar*](/url)\n',
    html: '<p>*<a href="/url">bar*</a></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_foo [bar_](/url)\n',
    html: '<p>_foo <a href="/url">bar_</a></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*<img src="foo" title="*"/>\n',
    html: '<p>*<img src="foo" title="*"/></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**<a href="**">\n',
    html: '<p>**<a href="**"></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__<a href="__">\n',
    html: '<p>__<a href="__"></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '*a `*`*\n',
    html: '<p><em>a <code>*</code></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '_a `_`_\n',
    html: '<p><em>a <code>_</code></em></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '**a<https://foo.bar/?q=**>\n',
    html: '<p>**a<a href="https://foo.bar/?q=**">https://foo.bar/?q=**</a></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '__a<https://foo.bar/?q=__>\n',
    html: '<p>__a<a href="https://foo.bar/?q=__">https://foo.bar/?q=__</a></p>\n',
    section: 'Emphasis and strong emphasis'
  },
  {
    markdown: '[link](/uri "title")\n',
    html: '<p><a href="/uri" title="title">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](/uri)\n',
    html: '<p><a href="/uri">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[](./target.md)\n',
    html: '<p><a href="./target.md"></a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link]()\n',
    html: '<p><a href="">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](<>)\n',
    html: '<p><a href="">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[]()\n',
    html: '<p><a href=""></a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](/my uri)\n',
    html: '<p>[link](/my uri)</p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](</my uri>)\n',
    html: '<p><a href="/my%20uri">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](foo\nbar)\n',
    html: '<p>[link](foo\nbar)</p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](<foo\nbar>)\n',
    html: '<p>[link](<foo\nbar>)</p>\n',
    section: 'Links'
  },
  {
    markdown: '[a](<b)c>)\n',
    html: '<p><a href="b)c">a</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](<foo\\>)\n',
    html: '<p>[link](&lt;foo&gt;)</p>\n',
    section: 'Links'
  },
  {
    markdown: '[a](<b)c\n[a](<b)c>\n[a](<b>c)\n',
    html: '<p>[a](&lt;b)c\n[a](&lt;b)c&gt;\n[a](<b>c)</p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](\\(foo\\))\n',
    html: '<p><a href="(foo)">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](foo(and(bar)))\n',
    html: '<p><a href="foo(and(bar))">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](foo(and(bar))\n',
    html: '<p>[link](foo(and(bar))</p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](foo\\(and\\(bar\\))\n',
    html: '<p><a href="foo(and(bar)">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](<foo(and(bar)>)\n',
    html: '<p><a href="foo(and(bar)">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](foo\\)\\:)\n',
    html: '<p><a href="foo):">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown:
      '[link](#fragment)\n\n[link](https://example.com#fragment)\n\n[link](https://example.com?foo=3#frag)\n',
    html: '<p><a href="#fragment">link</a></p>\n<p><a href="https://example.com#fragment">link</a></p>\n<p><a href="https://example.com?foo=3#frag">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](foo\\bar)\n',
    html: '<p><a href="foo%5Cbar">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](foo%20b&auml;)\n',
    html: '<p><a href="foo%20b%C3%A4">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link]("title")\n',
    html: '<p><a href="%22title%22">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown:
      '[link](/url "title")\n[link](/url \'title\')\n[link](/url (title))\n',
    html: '<p><a href="/url" title="title">link</a>\n<a href="/url" title="title">link</a>\n<a href="/url" title="title">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](/url "title \\"&quot;")\n',
    html: '<p><a href="/url" title="title &quot;&quot;">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](/url "title")\n',
    html: '<p><a href="/url%C2%A0%22title%22">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](/url "title "and" title")\n',
    html: '<p>[link](/url &quot;title &quot;and&quot; title&quot;)</p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](/url \'title "and" title\')\n',
    html: '<p><a href="/url" title="title &quot;and&quot; title">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link](   /uri\n  "title"  )\n',
    html: '<p><a href="/uri" title="title">link</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link] (/uri)\n',
    html: '<p>[link] (/uri)</p>\n',
    section: 'Links'
  },
  {
    markdown: '[link [foo [bar]]](/uri)\n',
    html: '<p><a href="/uri">link [foo [bar]]</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link] bar](/uri)\n',
    html: '<p>[link] bar](/uri)</p>\n',
    section: 'Links'
  },
  {
    markdown: '[link [bar](/uri)\n',
    html: '<p>[link <a href="/uri">bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link \\[bar](/uri)\n',
    html: '<p><a href="/uri">link [bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link *foo **bar** `#`*](/uri)\n',
    html: '<p><a href="/uri">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[![moon](moon.jpg)](/uri)\n',
    html: '<p><a href="/uri"><img src="moon.jpg" alt="moon" /></a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo [bar](/uri)](/uri)\n',
    html: '<p>[foo <a href="/uri">bar</a>](/uri)</p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo *[bar [baz](/uri)](/uri)*](/uri)\n',
    html: '<p>[foo <em>[bar <a href="/uri">baz</a>](/uri)</em>](/uri)</p>\n',
    section: 'Links'
  },
  {
    markdown: '![[[foo](uri1)](uri2)](uri3)\n',
    html: '<p><img src="uri3" alt="[foo](uri2)" /></p>\n',
    section: 'Links'
  },
  {
    markdown: '*[foo*](/uri)\n',
    html: '<p>*<a href="/uri">foo*</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo *bar](baz*)\n',
    html: '<p><a href="baz*">foo *bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '*foo [bar* baz]\n',
    html: '<p><em>foo [bar</em> baz]</p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo <bar attr="](baz)">\n',
    html: '<p>[foo <bar attr="](baz)"></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo`](/uri)`\n',
    html: '<p>[foo<code>](/uri)</code></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo<https://example.com/?search=](uri)>\n',
    html: '<p>[foo<a href="https://example.com/?search=%5D(uri)">https://example.com/?search=](uri)</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][bar]\n\n[bar]: /url "title"\n',
    html: '<p><a href="/url" title="title">foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link [foo [bar]]][ref]\n\n[ref]: /uri\n',
    html: '<p><a href="/uri">link [foo [bar]]</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link \\[bar][ref]\n\n[ref]: /uri\n',
    html: '<p><a href="/uri">link [bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[link *foo **bar** `#`*][ref]\n\n[ref]: /uri\n',
    html: '<p><a href="/uri">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[![moon](moon.jpg)][ref]\n\n[ref]: /uri\n',
    html: '<p><a href="/uri"><img src="moon.jpg" alt="moon" /></a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo [bar](/uri)][ref]\n\n[ref]: /uri\n',
    html: '<p>[foo <a href="/uri">bar</a>]<a href="/uri">ref</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo *bar [baz][ref]*][ref]\n\n[ref]: /uri\n',
    html: '<p>[foo <em>bar <a href="/uri">baz</a></em>]<a href="/uri">ref</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '*[foo*][ref]\n\n[ref]: /uri\n',
    html: '<p>*<a href="/uri">foo*</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo *bar][ref]*\n\n[ref]: /uri\n',
    html: '<p><a href="/uri">foo *bar</a>*</p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo <bar attr="][ref]">\n\n[ref]: /uri\n',
    html: '<p>[foo <bar attr="][ref]"></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo`][ref]`\n\n[ref]: /uri\n',
    html: '<p>[foo<code>][ref]</code></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo<https://example.com/?search=][ref]>\n\n[ref]: /uri\n',
    html: '<p>[foo<a href="https://example.com/?search=%5D%5Bref%5D">https://example.com/?search=][ref]</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][BaR]\n\n[bar]: /url "title"\n',
    html: '<p><a href="/url" title="title">foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[ẞ]\n\n[SS]: /url\n',
    html: '<p><a href="/url">ẞ</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[Foo\n  bar]: /url\n\n[Baz][Foo bar]\n',
    html: '<p><a href="/url">Baz</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo] [bar]\n\n[bar]: /url "title"\n',
    html: '<p>[foo] <a href="/url" title="title">bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo]\n[bar]\n\n[bar]: /url "title"\n',
    html: '<p>[foo]\n<a href="/url" title="title">bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo]: /url1\n\n[foo]: /url2\n\n[bar][foo]\n',
    html: '<p><a href="/url1">bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[bar][foo\\!]\n\n[foo!]: /url\n',
    html: '<p>[bar][foo!]</p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][ref[]\n\n[ref[]: /uri\n',
    html: '<p>[foo][ref[]</p>\n<p>[ref[]: /uri</p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][ref[bar]]\n\n[ref[bar]]: /uri\n',
    html: '<p>[foo][ref[bar]]</p>\n<p>[ref[bar]]: /uri</p>\n',
    section: 'Links'
  },
  {
    markdown: '[[[foo]]]\n\n[[[foo]]]: /url\n',
    html: '<p>[[[foo]]]</p>\n<p>[[[foo]]]: /url</p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][ref\\[]\n\n[ref\\[]: /uri\n',
    html: '<p><a href="/uri">foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[bar\\\\]: /uri\n\n[bar\\\\]\n',
    html: '<p><a href="/uri">bar\\</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[]\n\n[]: /uri\n',
    html: '<p>[]</p>\n<p>[]: /uri</p>\n',
    section: 'Links'
  },
  {
    markdown: '[\n ]\n\n[\n ]: /uri\n',
    html: '<p>[\n]</p>\n<p>[\n]: /uri</p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][]\n\n[foo]: /url "title"\n',
    html: '<p><a href="/url" title="title">foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[*foo* bar][]\n\n[*foo* bar]: /url "title"\n',
    html: '<p><a href="/url" title="title"><em>foo</em> bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[Foo][]\n\n[foo]: /url "title"\n',
    html: '<p><a href="/url" title="title">Foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo] \n[]\n\n[foo]: /url "title"\n',
    html: '<p><a href="/url" title="title">foo</a>\n[]</p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo]\n\n[foo]: /url "title"\n',
    html: '<p><a href="/url" title="title">foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[*foo* bar]\n\n[*foo* bar]: /url "title"\n',
    html: '<p><a href="/url" title="title"><em>foo</em> bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[[*foo* bar]]\n\n[*foo* bar]: /url "title"\n',
    html: '<p>[<a href="/url" title="title"><em>foo</em> bar</a>]</p>\n',
    section: 'Links'
  },
  {
    markdown: '[[bar [foo]\n\n[foo]: /url\n',
    html: '<p>[[bar <a href="/url">foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[Foo]\n\n[foo]: /url "title"\n',
    html: '<p><a href="/url" title="title">Foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo] bar\n\n[foo]: /url\n',
    html: '<p><a href="/url">foo</a> bar</p>\n',
    section: 'Links'
  },
  {
    markdown: '\\[foo]\n\n[foo]: /url "title"\n',
    html: '<p>[foo]</p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo*]: /url\n\n*[foo*]\n',
    html: '<p>*<a href="/url">foo*</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][bar]\n\n[foo]: /url1\n[bar]: /url2\n',
    html: '<p><a href="/url2">foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][]\n\n[foo]: /url1\n',
    html: '<p><a href="/url1">foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo]()\n\n[foo]: /url1\n',
    html: '<p><a href="">foo</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo](not a link)\n\n[foo]: /url1\n',
    html: '<p><a href="/url1">foo</a>(not a link)</p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][bar][baz]\n\n[baz]: /url\n',
    html: '<p>[foo]<a href="/url">bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][bar][baz]\n\n[baz]: /url1\n[bar]: /url2\n',
    html: '<p><a href="/url2">foo</a><a href="/url1">baz</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '[foo][bar][baz]\n\n[baz]: /url1\n[foo]: /url2\n',
    html: '<p>[foo]<a href="/url1">bar</a></p>\n',
    section: 'Links'
  },
  {
    markdown: '![foo](/url "title")\n',
    html: '<p><img src="/url" alt="foo" title="title" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo *bar*]\n\n[foo *bar*]: train.jpg "train & tracks"\n',
    html: '<p><img src="train.jpg" alt="foo bar" title="train &amp; tracks" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo ![bar](/url)](/url2)\n',
    html: '<p><img src="/url2" alt="foo bar" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo [bar](/url)](/url2)\n',
    html: '<p><img src="/url2" alt="foo bar" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo *bar*][]\n\n[foo *bar*]: train.jpg "train & tracks"\n',
    html: '<p><img src="train.jpg" alt="foo bar" title="train &amp; tracks" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo *bar*][foobar]\n\n[FOOBAR]: train.jpg "train & tracks"\n',
    html: '<p><img src="train.jpg" alt="foo bar" title="train &amp; tracks" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo](train.jpg)\n',
    html: '<p><img src="train.jpg" alt="foo" /></p>\n',
    section: 'Images'
  },
  {
    markdown: 'My ![foo bar](/path/to/train.jpg  "title"   )\n',
    html: '<p>My <img src="/path/to/train.jpg" alt="foo bar" title="title" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo](<url>)\n',
    html: '<p><img src="url" alt="foo" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![](/url)\n',
    html: '<p><img src="/url" alt="" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo][bar]\n\n[bar]: /url\n',
    html: '<p><img src="/url" alt="foo" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo][bar]\n\n[BAR]: /url\n',
    html: '<p><img src="/url" alt="foo" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo][]\n\n[foo]: /url "title"\n',
    html: '<p><img src="/url" alt="foo" title="title" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![*foo* bar][]\n\n[*foo* bar]: /url "title"\n',
    html: '<p><img src="/url" alt="foo bar" title="title" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![Foo][]\n\n[foo]: /url "title"\n',
    html: '<p><img src="/url" alt="Foo" title="title" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo] \n[]\n\n[foo]: /url "title"\n',
    html: '<p><img src="/url" alt="foo" title="title" />\n[]</p>\n',
    section: 'Images'
  },
  {
    markdown: '![foo]\n\n[foo]: /url "title"\n',
    html: '<p><img src="/url" alt="foo" title="title" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![*foo* bar]\n\n[*foo* bar]: /url "title"\n',
    html: '<p><img src="/url" alt="foo bar" title="title" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '![[foo]]\n\n[[foo]]: /url "title"\n',
    html: '<p>![[foo]]</p>\n<p>[[foo]]: /url &quot;title&quot;</p>\n',
    section: 'Images'
  },
  {
    markdown: '![Foo]\n\n[foo]: /url "title"\n',
    html: '<p><img src="/url" alt="Foo" title="title" /></p>\n',
    section: 'Images'
  },
  {
    markdown: '!\\[foo]\n\n[foo]: /url "title"\n',
    html: '<p>![foo]</p>\n',
    section: 'Images'
  },
  {
    markdown: '\\![foo]\n\n[foo]: /url "title"\n',
    html: '<p>!<a href="/url" title="title">foo</a></p>\n',
    section: 'Images'
  },
  {
    markdown: '<http://foo.bar.baz>\n',
    html: '<p><a href="http://foo.bar.baz">http://foo.bar.baz</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<https://foo.bar.baz/test?q=hello&id=22&boolean>\n',
    html: '<p><a href="https://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean">https://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<irc://foo.bar:2233/baz>\n',
    html: '<p><a href="irc://foo.bar:2233/baz">irc://foo.bar:2233/baz</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<MAILTO:FOO@BAR.BAZ>\n',
    html: '<p><a href="MAILTO:FOO@BAR.BAZ">MAILTO:FOO@BAR.BAZ</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<a+b+c:d>\n',
    html: '<p><a href="a+b+c:d">a+b+c:d</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<made-up-scheme://foo,bar>\n',
    html: '<p><a href="made-up-scheme://foo,bar">made-up-scheme://foo,bar</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<https://../>\n',
    html: '<p><a href="https://../">https://../</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<localhost:5001/foo>\n',
    html: '<p><a href="localhost:5001/foo">localhost:5001/foo</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<https://foo.bar/baz bim>\n',
    html: '<p>&lt;https://foo.bar/baz bim&gt;</p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<https://example.com/\\[\\>\n',
    html: '<p><a href="https://example.com/%5C%5B%5C">https://example.com/\\[\\</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<foo@bar.example.com>\n',
    html: '<p><a href="mailto:foo@bar.example.com">foo@bar.example.com</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<foo+special@Bar.baz-bar0.com>\n',
    html: '<p><a href="mailto:foo+special@Bar.baz-bar0.com">foo+special@Bar.baz-bar0.com</a></p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<foo\\+@bar.example.com>\n',
    html: '<p>&lt;foo+@bar.example.com&gt;</p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<>\n',
    html: '<p>&lt;&gt;</p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '< https://foo.bar >\n',
    html: '<p>&lt; https://foo.bar &gt;</p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<m:abc>\n',
    html: '<p>&lt;m:abc&gt;</p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<foo.bar.baz>\n',
    html: '<p>&lt;foo.bar.baz&gt;</p>\n',
    section: 'Autolinks'
  },
  {
    markdown: 'https://example.com\n',
    html: '<p>https://example.com</p>\n',
    section: 'Autolinks'
  },
  {
    markdown: 'foo@bar.example.com\n',
    html: '<p>foo@bar.example.com</p>\n',
    section: 'Autolinks'
  },
  {
    markdown: '<a><bab><c2c>\n',
    html: '<p><a><bab><c2c></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: '<a/><b2/>\n',
    html: '<p><a/><b2/></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: '<a  /><b2\ndata="foo" >\n',
    html: '<p><a  /><b2\ndata="foo" ></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown:
      '<a foo="bar" bam = \'baz <em>"</em>\'\n_boolean zoop:33=zoop:33 />\n',
    html: '<p><a foo="bar" bam = \'baz <em>"</em>\'\n_boolean zoop:33=zoop:33 /></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: 'Foo <responsive-image src="foo.jpg" />\n',
    html: '<p>Foo <responsive-image src="foo.jpg" /></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: '<33> <__>\n',
    html: '<p>&lt;33&gt; &lt;__&gt;</p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: '<a h*#ref="hi">\n',
    html: '<p>&lt;a h*#ref=&quot;hi&quot;&gt;</p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: "<a href=\"hi'> <a href=hi'>\n",
    html: "<p>&lt;a href=&quot;hi'&gt; &lt;a href=hi'&gt;</p>\n",
    section: 'Raw HTML'
  },
  {
    markdown: '< a><\nfoo><bar/ >\n<foo bar=baz\nbim!bop />\n',
    html: '<p>&lt; a&gt;&lt;\nfoo&gt;&lt;bar/ &gt;\n&lt;foo bar=baz\nbim!bop /&gt;</p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: "<a href='bar'title=title>\n",
    html: "<p>&lt;a href='bar'title=title&gt;</p>\n",
    section: 'Raw HTML'
  },
  {
    markdown: '</a></foo >\n',
    html: '<p></a></foo ></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: '</a href="foo">\n',
    html: '<p>&lt;/a href=&quot;foo&quot;&gt;</p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: 'foo <!-- this is a --\ncomment - with hyphens -->\n',
    html: '<p>foo <!-- this is a --\ncomment - with hyphens --></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: 'foo <!--> foo -->\n\nfoo <!---> foo -->\n',
    html: '<p>foo <!--> foo --&gt;</p>\n<p>foo <!---> foo --&gt;</p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: 'foo <?php echo $a; ?>\n',
    html: '<p>foo <?php echo $a; ?></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: 'foo <!ELEMENT br EMPTY>\n',
    html: '<p>foo <!ELEMENT br EMPTY></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: 'foo <![CDATA[>&<]]>\n',
    html: '<p>foo <![CDATA[>&<]]></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: 'foo <a href="&ouml;">\n',
    html: '<p>foo <a href="&ouml;"></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: 'foo <a href="\\*">\n',
    html: '<p>foo <a href="\\*"></p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: '<a href="\\"">\n',
    html: '<p>&lt;a href=&quot;&quot;&quot;&gt;</p>\n',
    section: 'Raw HTML'
  },
  {
    markdown: 'foo  \nbaz\n',
    html: '<p>foo<br />\nbaz</p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: 'foo\\\nbaz\n',
    html: '<p>foo<br />\nbaz</p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: 'foo       \nbaz\n',
    html: '<p>foo<br />\nbaz</p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: 'foo  \n     bar\n',
    html: '<p>foo<br />\nbar</p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: 'foo\\\n     bar\n',
    html: '<p>foo<br />\nbar</p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: '*foo  \nbar*\n',
    html: '<p><em>foo<br />\nbar</em></p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: '*foo\\\nbar*\n',
    html: '<p><em>foo<br />\nbar</em></p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: '`code  \nspan`\n',
    html: '<p><code>code   span</code></p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: '`code\\\nspan`\n',
    html: '<p><code>code\\ span</code></p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: '<a href="foo  \nbar">\n',
    html: '<p><a href="foo  \nbar"></p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: '<a href="foo\\\nbar">\n',
    html: '<p><a href="foo\\\nbar"></p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: 'foo\\\n',
    html: '<p>foo\\</p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: 'foo  \n',
    html: '<p>foo</p>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: '### foo\\\n',
    html: '<h3>foo\\</h3>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: '### foo  \n',
    html: '<h3>foo</h3>\n',
    section: 'Hard line breaks'
  },
  {
    markdown: 'foo\nbaz\n',
    html: '<p>foo\nbaz</p>\n',
    section: 'Soft line breaks'
  },
  {
    markdown: 'foo \n baz\n',
    html: '<p>foo\nbaz</p>\n',
    section: 'Soft line breaks'
  },
  {
    markdown: "hello $.;'there\n",
    html: "<p>hello $.;'there</p>\n",
    section: 'Textual content'
  },
  {
    markdown: 'Foo χρῆν\n',
    html: '<p>Foo χρῆν</p>\n',
    section: 'Textual content'
  },
  {
    markdown: 'Multiple     spaces\n',
    html: '<p>Multiple     spaces</p>\n',
    section: 'Textual content'
  }
]
