/*
  example script workflow:
  (1) check file encoding with gosp-bkrs API
  (2) convert the file to UTF8
  (3) parse the converted file
  (4) write results to one-line CSV
  NB:
   1) for simplicity's sake all filenames are hardcoded here
   2) source dsl file may be downloaded from bkrs.info for free
   3) method 'FileSize' is not used here
*/

'use strict';
import fs from 'fs'; // for a local file saving
import { FileEncoding, OneLine, ToUTF8 } from '../index.js';

// (1) define the source file encoding
const srcFile = 'bkrs_v85.dsl';
const fileConv = FileEncoding.getFileEncoding(srcFile);
console.log(`File ${srcFile} has ${fileConv.toUpperCase()} encoding`);
ToUTF8.convertToUTF8(srcFile, 'bkrs_v85.utf8', fileConv)
  .then((targetFileName) => {
    console.log(`${targetFileName.toUpperCase()} is written...`);
    return targetFileName;
  })
  .then(targetFileName => {
    const oneLine = new OneLine();
    oneLine.promiseReady(targetFileName)
      .then(allSets => {
        const flatSet = allSets.flat();
        flatSet.shift(); // get rid of the 1st set (dictionary meta data)
        // prepare to save the result set
        let readyLines = []; // parsed/processed file lines
        for (let aNest of flatSet) {
          readyLines.push(`${aNest[0]}|${aNest[1]}|${aNest[2]}`);
        }
        const allLines = readyLines.join('\n');
        // (4) save results to CSV file
        try {
          fs.writeFileSync(
            'bkrs.csv',
            allLines,
            {
              encoding: 'utf8',
              flag: 'w'
            }
          );
        } catch (err) {
          console.error(err);
        }
      })
      .catch(e => console.error(e));
  })
  .catch(e => console.error(e));
