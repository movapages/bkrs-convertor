// file-size (in lines) module
import fs from 'fs';
import rl from 'readline';

export default class FileSize {
  static getLineNumberFromFile(fileName) {
    return new Promise((resolve, reject) => {
      let lineNumber = 0;
      let lineInterface = rl.createInterface({
        input: fs.createReadStream(fileName),
        output: process.stdout,
        terminal: false
      });
      lineInterface.on('error', (err) => reject(e));
      lineInterface.on('line', (line) => lineNumber++);
      lineInterface.on('close', () => resolve(lineNumber));
    });
  }
}
