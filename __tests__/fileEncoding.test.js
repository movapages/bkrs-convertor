import { FileEncoding } from '../index';

describe('Test a file encoding', () => {
  test('utf16', () => {
    expect( FileEncoding.getFileEncoding(`${__dirname}/utf8.txt`)).toEqual('utf16le');
  });
});
