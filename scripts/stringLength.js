function stringLength(string) {
  if(string.length < 1 || string.length > 10) {
    throw new Error('String is out of scope');
  }
  const regEx = /[a-zA-Z]/g;
  const charArr = string.match(regEx);
  const len = charArr.length;
  return len;
}

module.exports = stringLength;