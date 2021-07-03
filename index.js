/*!
 * gosp-bkrs
 * Copyright(c) 2021 GOSP (https://www.ganshina.club)
 * MPL-2.0 Licensed
 */
'use strict';
// usual way to import-export via index file -
// import FileEncoding from './lib/file-encoding/index.mjs';
// export {FileEncoding}; // see 'example/fileConf.js' for usage

export { default as FileEncoding } from './lib/file-encoding/index.mjs';
export { default as ToUTF8 } from './lib/toUTF8/index.mjs';
export { default as OneLine } from './lib/toOneLine/index.mjs';
export { default as FileSize } from './lib/file-size/index.mjs';
