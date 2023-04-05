const reverseString = require('../scripts/reverseString');

test('Not a valid string', () => {
  expect(() => {
    reverseString('')
  }).toThrow('Enter a valid string!');
})

test('Perfect reverse', () => {
  expect(reverseString('read')).toBe('daer');
})