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
