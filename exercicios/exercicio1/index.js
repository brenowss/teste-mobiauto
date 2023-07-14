function maskify(string = '', lastChars = 4) {
  return string.slice(-lastChars).padStart(string.length, '#');
}

module.exports = maskify;
