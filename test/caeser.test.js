const caeser = require('../src/caeser');

test('should encrypt a message correctly', () => {
  expect(caeser('attack at dawn', 2)).toBe('cvvcem cv fcyp');
});

test('encrypted messages should keep the same message as plainText', () => {
  expect(caeser('Attack at daWn', 2)).toBe('Cvvcem cv fcYp');
});

test('encrypted messages should keep their punctuation', () => {
  expect(caeser('attack, at ,dawn', 2)).toBe('cvvcem, cv ,fcyp');
});
