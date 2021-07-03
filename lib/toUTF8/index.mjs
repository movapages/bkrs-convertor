// convert a text file from X to UTF8 encoding
import fs from 'fs';

export default class ToUTF8 {
  static convertToUTF8(srcFileName, targetFileName, fromEncoding) {
    return new Promise((resolve, reject) => {
      const rStream = fs.createReadStream(srcFileName, {autoClose: false});
      const wStream = fs.createWriteStream(targetFileName);
      rStream.setEncoding(fromEncoding).pipe(wStream);
      rStream.on('error', (e) => reject(e));
      wStream.on('error', (e) => reject(e));
      rStream.on('end', () => {
        rStream.close();
        wStream.close();
        rStream.unpipe();
        rStream.destroy();
        wStream.destroy();
        resolve(targetFileName);
      });
    });
  }
}
