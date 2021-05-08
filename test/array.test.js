const analyze = require('../src/arrayAnalyze');

test('should return an object with 4 four props', () => {
  expect(Object.keys(analyze([1, 2, 3, 4, 5])).length).toBe(4);
});
