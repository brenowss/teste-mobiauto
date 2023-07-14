const maskify = require('./index');

describe('maskify', () => {
  it('should return an empty string when given an empty string', () => {
    expect(maskify('')).toBe('');
  });

  it('should return the original string when it has length 1', () => {
    expect(maskify('1')).toBe('1');
  });

  it('should mask all but the last four characters of a string', () => {
    expect(maskify('4556364607935616')).toBe('############5616');
    expect(maskify('64607935616')).toBe('#######5616');
    expect(maskify('Skippy')).toBe('##ippy');
    expect(maskify('Nanananananananananana Batman!')).toBe(
      '##########################man!'
    );
  });

  it('should not mask anything when the string has length 4 or less', () => {
    expect(maskify('1234')).toBe('1234');
    expect(maskify('123')).toBe('123');
    expect(maskify('12')).toBe('12');
    expect(maskify('1')).toBe('1');
  });

  it('should mask all but the last two characters of a string when lastChars is 2', () => {
    expect(maskify('4556364607935616', 2)).toBe('##############16');
    expect(maskify('64607935616', 2)).toBe('#########16');
    expect(maskify('Skippy', 2)).toBe('####py');
    expect(maskify('Nanananananananananana Batman!', 2)).toBe(
      '############################n!'
    );
  });

  it('should mask all but the last character of a string when lastChars is 1', () => {
    expect(maskify('4556364607935616', 1)).toBe('###############6');
    expect(maskify('64607935616', 1)).toBe('##########6');
    expect(maskify('Skippy', 1)).toBe('#####y');
    expect(maskify('Nanananananananananana Batman!', 1)).toBe(
      '#############################!'
    );
  });
});
