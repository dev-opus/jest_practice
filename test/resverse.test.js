const reverseString = require('../src/reverse');

test('should return a string in reverse format', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

test('should not truncate string capitalization', () => {
  expect(reverseString('who Goes')).toBe('seoG ohw');
});
