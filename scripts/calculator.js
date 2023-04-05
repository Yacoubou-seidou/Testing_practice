class Calculator {
  add(a, b) {
    if(!a || !b || typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Need valid number to add!')
    }
    return a + b;
  }

  subtract(a, b) {
    if(!a || !b || typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Need valid number to subtract!')
    }
    return a - b;
  }

  divide(a, b) {
    if(!a || !b || typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Need valid number to divide!')
    }
    return a / b;
  }

  multiply(a, b) {
    if(!a || !b || typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Need valid number to multiply!')
    }
    return a * b;
  }
}

module.exports = Calculator;