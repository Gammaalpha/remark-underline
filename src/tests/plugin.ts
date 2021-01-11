import fs from "fs";
import remark from "remark";

import { RemarkUnderline } from "../remarkUnderline";
let doc = fs.readFileSync(__dirname + "/testing.md", "utf8");

export const Plugin = (_marker = "!!") => {
    const unified = require("unified");
    const remarkParse = require("remark-parse");
    const remark2rehype = require("remark-rehype")
    const rehypeStringify = require("rehype-stringify")
    const remarkGfm = require('remark-gfm')
    let content = "";
    const result = remark()
        .use(remarkParse)
        .use(RemarkUnderline, { marker: _marker })
        .use(remarkGfm)
        .use(remark2rehype)
        .use(rehypeStringify)
        .process(fs.readFileSync(__dirname + `\\testing.md`), (err: any, file: any) => {
            // console.log(String(file));
            content = String(file)
        }
        );
    // console.log("Content :", content);

    return content;
}