module.exports = calculator = {
  add(...args) {
    const sum = args.reduce((int, cur) => int + cur, 0);
    return sum;
  },
  subtract(a, b) {
    if (a == undefined || b == undefined) return 'Syntax Error';

    return a - b;
  },
  divide(a, b) {
    if (a == undefined || b == undefined) return 'Syntax Error';

    return a / b;
  },
  multiply(...args) {
    const multiple = args.reduce((int, cur) => int * cur, 1);
    return multiple;
  },
};
