const calculator = require('../src/calculator');

test('should contain add, subtract, divide and multiply methods', () => {
  const calcMethods = {
    add() {},
    subtract() {},
    divide() {},
    multiply() {},
  };

  expect(JSON.stringify(calculator)).toEqual(JSON.stringify(calcMethods));
});

test('should add numbers currectly', () => {
  expect(calculator.add(1)).toBe(1);
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(1, 2, 3, 4, 5)).toBe(15);
});

test('should subtract two numbers correctly', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(1)).toBe('Syntax Error');
});

test('should divide two numbers correctly', () => {
  expect(calculator.divide()).toBe('Syntax Error');
  expect(calculator.divide(Number)).toBe('Syntax Error');
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.divide(5, 76)).toBeCloseTo(0.065789);
});

test('should multiply numbers correctly', () => {
  expect(calculator.multiply(7, 2)).toBe(14);
  expect(calculator.multiply(9, 6, 96, 9, 6)).toBe(279936);
});
