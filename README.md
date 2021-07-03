### bkrs-convertor ([Mova Club project](https://mova.club/))

[BKRS Info](https://bkrs.info/) _dsl-to-csv file converter_.



<h6>Usage</h6>

Please, check `example` sub-folder script for a use-case. The script itself is capable of converting UTF16LE dsl/markdown file of freely distributable with [bkrs.info](https://bkrs.info) dictionary. First, it's converting the source file encoding, and, second, it saves CSV file free from the _markdown_ in the long run.

The package itself is intended for use in __Electron__ applications by [Mova Project](https://mova.club/).

#### Module API

<h6>ES6 Node Module Notes</h6>

* The ES6 module syntax support in Node.js starts with Node <strong>v.14</strong>, the version used here - 14.9.

* It's mandatory to adjust one's `package.json` by adding ``"type":"module"``, plus, start using `*.mjs` extensions for all NPM libraries.

* Some configuration scripts, like f.i. `jest.config.mjs` in this library, may require explicit *module* designation.

<h6>API Details</h6>

| Class | Method(s) | Description |
|-------|:--------|:--------------|
| FileEncoding | ```static getFileEncoding(fileName: string): <encoding: string>``` | checks a text file (*fileName* - path to file), and returns encoding |
| ToUTF8 | `static convertToUTF8(srcFileName: string, targetFileName: string, fromEncoding: string): <Promise.resolve(targetFileName: string)>` | accepts a file to convert (path), output file (path) and source file encoding; output encoding is UTF8 |
| OneLine |`getFile(srcFile: string): <string[]>`| reads (sync) in a file (path) and returns array of dictionary nests - 1 nest = 3 lines|
|         | `procSet(set: string[]): <Promise.resolve(set[])>`|accepts an array of lines (nests) and returns a set of processed lines|
|         | `promiseReady(file: string): <Promise.all(set[])>`|accepts a file (path) and returns an array of arrays of strings: processed UTF8 dictionary file|
| FileSize | `static getLineNumberFromFile(fileName: string): <STDOUT>`|accepts a file (path) and returns a number of lines in that text file|

#### Testing

The present __Jest__ capabilites don't cover full-fledged testing of ES6 Node.js modules, however, `jest-esm-transformer` module makes it possible.  

> It means using```import {...} from "..."``` syntax is possible in Jest tests.
