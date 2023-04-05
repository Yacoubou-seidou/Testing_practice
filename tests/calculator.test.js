const Calculator = require('../scripts/calculator');
const calcul = new Calculator();

describe('Add', () => {
  test('Valid input', () => {
    expect(() => {
      calcul.add('a', 2)
    }).toThrow('Need valid number to add!');
  })

  test('Return result', () => {
    expect(calcul.add(2, 2)).toBe(4);
  })

  test('Result is a number', () => {
    expect(Number.isNaN(calcul.add(2, 2))).toBeFalsy();
  })
})

describe('Subtract', () => {
  test('Valid input', () => {
    expect(() => {
      calcul.subtract('a', 2)
    }).toThrow('Need valid number to subtract!');
  })

  test('Return result', () => {
    expect(calcul.subtract(2, 2)).toBe(0);
  })

  test('Result is a number', () => {
    expect(Number.isNaN(calcul.subtract(2, 2))).toBeFalsy();
  })
})

describe('Divide', () => {
  test('Valid input', () => {
    expect(() => {
      calcul.divide('a', 2)
    }).toThrow('Need valid number to divide!');
  })

  test('Return result', () => {
    expect(calcul.divide(2, 2)).toBe(1);
  })

  test('Result is a number', () => {
    expect(Number.isNaN(calcul.divide(2, 2))).toBeFalsy();
  })
})

describe('Multiply', () => {
  test('Valid input', () => {
    expect(() => {
      calcul.multiply('a', 2)
    }).toThrow('Need valid number to multiply!');
  })

  test('Return result', () => {
    expect(calcul.multiply(2, 2)).toBe(4);
  })

  test('Result is a number', () => {
    expect(Number.isNaN(calcul.multiply(2, 2))).toBeFalsy();
  })
})