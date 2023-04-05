function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error('Need a valid string with a value!')
  } else if (/^[a-zA-Z]/.test(string) === false) {
    throw new Error('The first character should be a letter!')
  } else {
    const chars = string.slice(1);
    let firstChar = string.charAt(0);
    return firstChar.toUpperCase() + chars;
  }
}

module.exports = capitalize;