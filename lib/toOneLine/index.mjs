// bkrs to one line nest
import fs from 'fs';

export default class OneLine {

  getFile(srcFile) {
    return fs.readFileSync(srcFile, { encoding: 'utf8', flag: 'r' }).split(/\r?\n\r?\n/);
  }

  procSet(set) {
    return new Promise((resolve, reject) => {
      let resultSet = [];
      for (let nest of set) {
        let curSet = nest.split(/\r?\n/).filter(el => el.length > 0);
        curSet[0] = curSet[0].trim();

        curSet[1] = curSet[1].trim();
        curSet[1] = curSet[1].replace(/\[[*\p{sc=Latin}\/\\\d\s.,:;-]+\]/ug, ' ');
        curSet[1] = curSet[1].replace(/\s\s+/ug, ' ');
        curSet[1] = curSet[1].trim();

        curSet[2] = curSet[2].trim();
        curSet[2] = curSet[2].replace(/\[[*\p{sc=Latin}\/\\\d\s.,;:-]+\]/ug, ' ');
        curSet[2] = curSet[2].replace(/\\\[/ug, '(');
        curSet[2] = curSet[2].replace(/\\\]/ug, ')');
        curSet[2] = curSet[2].replace(/\s+[*]\s+/ug, ' ');
        curSet[2] = curSet[2].replace(/\s\s+/ug, ' ');
        curSet[2] = curSet[2].replace(/\s+\)/ug, ')');
        curSet[2] = curSet[2].replace(/\(\s+/ug, '(');
        curSet[2] = curSet[2].trim();
        resultSet.push(curSet);
      }
      resolve(resultSet);
    });
  }

  promiseReady(file) {
    let allFileOjb = this.getFile(file);
    let subSets = [], allPromise = [];
    while (allFileOjb.length > 0) {
      subSets.push(this.procSet(allFileOjb.splice(0, 200000)));
    }
    console.log('subSets-len: ', subSets.length);
    return Promise.all(subSets);
  }

}
