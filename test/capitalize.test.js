const capitalize = require('../src/capitalize');

test('should capitalize an all lowercase stringt', () => {
  expect(capitalize('hello')).toBe('Hello');
});
