# remark-abbr

[remark](https://github.com/remarkjs/remark "remark github repo") plugin to parse custom Markdown syntax to produce abbreviations.

It creates a new MDAST node type : "u".

A demo for it can be seen [here](https://gammaalpha.github.io/rec-markdown/)

<!-- > Note: Does **NOT** work with [React Markdown](https://github.com/remarkjs/react-markdown) -->

## Install

npm:

> npm install https://github.com/Gammaalpha/remark-underline.git

_or_

yarn:

> yarn add https://github.com/Gammaalpha/remark-underline.git

## Use

If we have the following file, example.md

```
This is !!underline!!.
```

And the script example.js has the following code:

```javascript
const fs = require("fs");
const unified = require("unified");
const remarkParse = require("remark-parse");
const remark2rehype = require("remark-rehype");
const rehypeStringify = require("rehype-stringify");

unified()
  .use(remarkParse)
  .use(RemarkUnderline, { marker: "!!" })
  .use(remark2rehype)
  .use(rehypeStringify)
  .process(
    fs.readFileSync(`${process.cwd()}/src/example.md`),
    (err: any, file: any) => console.log(String(file))
  );
```

This would output into the following HTML:

```html
<p>This is <ins>underline</ins>.</p>
```


## Setup

The custom marker for this plugin has been set to two exclamation points (!!), but it can be replaced with any other one which is free to use. for example 

```javascript
...
.use(RemarkUnderline, { marker: "^^" })
...
```

## License

[MIT](https://github.com/remarkjs/remark-html/blob/main/license "MIT License")
