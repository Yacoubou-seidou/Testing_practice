const capitalize = require("../scripts/capitalize");

describe('Capitalize string tests', () => {
  test('Capitalizes the string', () => {
    expect(/[A-Z]/.test(
      capitalize('yacos')
      .split('')[0]
    ))
    .toBeTruthy();
  })

  test('Error thrown when a string is not passed as an argument', () => {
    expect(() => {
      capitalize(40);
    }).toThrow('Need a valid string with a value!');
  })

  test('Error thrown when first char is not a string', () => {
    expect(() => {
      capitalize(' dino');
    }).toThrow('The first character should be a letter!')
  })
})