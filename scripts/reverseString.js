function reverseString(string) {
  if(!string) {
    throw new Error('Enter a valid string!');
  }
  const strArr = string.split('')
    .reverse()
    .join('');
  return strArr;
}

module.exports = reverseString;