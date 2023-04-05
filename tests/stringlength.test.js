const stringLength = require('../scripts/stringLength');

test('The length of string should be:', () => {
  expect(stringLength('Yacos')).toBe(5);
})

test('Scope of string', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String is out of scope');
})