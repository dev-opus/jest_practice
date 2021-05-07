const caeser = require('../src/caeser');

test('should encrypt a message correctly', () => {
  expect(caeser('attack at dawn', 2)).toBe('cvvcem cv fcyp');
});
