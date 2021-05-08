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

test('should encrypt messages correctly for numbers between 0-25', () => {
  expect(caeser('attack at dawn', 9)).toBe('jccjlt jc mjfw');
  expect(caeser('attack at dawn', 25)).toBe('zsszbj zs czvm');
});
