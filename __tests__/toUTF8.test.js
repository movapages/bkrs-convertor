import {ToUTF8} from '../index';
describe('Convert a file encoding', () => {
  test('ToUTF8', () => {
    return ToUTF8.convertToUTF8(
      `${__dirname}/utf8.txt`,
      `${__dirname}/toUtf8.txt`,
      'utf16le'
    ).then( retFile => expect(retFile).toMatch('toUtf8.txt'));
  });
});
