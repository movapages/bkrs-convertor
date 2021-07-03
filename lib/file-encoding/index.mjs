// define a text file encoding
import fs from 'fs';

export default class FileEncoding {

  static getFileEncoding(fileName) {

    var d = new Buffer.alloc(5, [0, 0, 0, 0, 0]);
    var fd = fs.openSync(fileName, 'r');
    fs.readSync(fd, d, 0, 5, 0);
    fs.closeSync(fd);

    // https://en.wikipedia.org/wiki/Byte_order_mark
    var e = false;
    if (!e && d[0] === 0xEF && d[1] === 0xBB && d[2] === 0xBF) {
      e = 'utf8';
    }
    if (!e && d[0] === 0xFE && d[1] === 0xFF) {
      e = 'utf16be';
    }
    if (!e && d[0] === 0xFF && d[1] === 0xFE) {
      e = 'utf16le';
    }
    if (!e) {
      e = 'ascii';
    }

    return e;

  }

}
