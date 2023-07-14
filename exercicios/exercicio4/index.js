function checkIfTheFirstLetterIsUppercase(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return false;
  }

  const firstCharCode = word.charCodeAt(0);

  return firstCharCode >= 65 && firstCharCode <= 90;
}

module.exports = checkIfTheFirstLetterIsUppercase;
