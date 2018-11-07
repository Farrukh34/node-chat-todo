const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non string values', () => {
    var res = isRealString(12);
    expect(res).toBe(false);
  });
  it('should reject string with only blank spaces', () => {
    var res = isRealString('    ');
    expect(res).toBe(false);
  });
  it('should accept string with non-space charcters', () => {
    var res = isRealString('   Lucy   ');
    expect(res).toBe(true);
  });
});
