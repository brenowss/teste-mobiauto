const checkIfTheFirstLetterIsUppercase = require('./index');

describe('checkIfTheFirstLetterIsUppercase', () => {
  it('should return true if the first letter is uppercase', () => {
    expect(checkIfTheFirstLetterIsUppercase('Hello')).toBe(true);
    expect(checkIfTheFirstLetterIsUppercase('World')).toBe(true);
    expect(checkIfTheFirstLetterIsUppercase('JavaScript')).toBe(true);
  });

  it('should return false if the first letter is not uppercase', () => {
    expect(checkIfTheFirstLetterIsUppercase('hello')).toBe(false);
    expect(checkIfTheFirstLetterIsUppercase('world')).toBe(false);
    expect(checkIfTheFirstLetterIsUppercase('javaScript')).toBe(false);
  });

  it('should return false if the input is not a string', () => {
    expect(checkIfTheFirstLetterIsUppercase(123)).toBe(false);
    expect(checkIfTheFirstLetterIsUppercase(null)).toBe(false);
    expect(checkIfTheFirstLetterIsUppercase(undefined)).toBe(false);
    expect(checkIfTheFirstLetterIsUppercase({})).toBe(false);
    expect(checkIfTheFirstLetterIsUppercase([])).toBe(false);
  });

  it('should return false if the input is an empty string', () => {
    expect(checkIfTheFirstLetterIsUppercase('')).toBe(false);
  });

  test('custom tests', () => {
    expect(checkIfTheFirstLetterIsUppercase('Brasil')).toBe(true);
    expect(checkIfTheFirstLetterIsUppercase('Deu Certo!')).toBe(true);
    expect(checkIfTheFirstLetterIsUppercase('mobiauto')).toBe(false);
    expect(checkIfTheFirstLetterIsUppercase('xXx xXx')).toBe(false);
    expect(checkIfTheFirstLetterIsUppercase('xDD')).toBe(false);
  });
});
