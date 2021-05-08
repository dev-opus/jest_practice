const analyze = require('../src/arrayAnalyze');

test('should return an object with 4 four props', () => {
  expect(Object.keys(analyze([1, 2, 3, 4, 5])).length).toBe(4);
});

test('returned obj should have average, min, max, and length properties', () => {
  expect(analyze([1, 2, 3, 4, 5]).hasOwnProperty('average')).toBeTruthy();
  expect(analyze([1, 2, 3, 4, 5]).hasOwnProperty('max')).toBeTruthy();
  expect(analyze([1, 2, 3, 4, 5]).hasOwnProperty('min')).toBeTruthy();
  expect(analyze([1, 2, 3, 4, 5]).hasOwnProperty('length')).toBeTruthy();
});

test('returned obj.average should give the true average of the array of numbers', () => {
  expect(analyze([1, 2, 3, 4, 5]).average).toBeCloseTo(3);
  expect(analyze([1, 2, 3, 4]).average).toBeCloseTo(2.5);
});

test('returned obj.max should give the max value in the input array', () => {
  expect(expect(analyze([1, 2, 3, 4, 5]).max).toBe(5));
  expect(expect(analyze([1, 2, 3, 4, 5, 80.5]).max).toBe(80.5));
});

test('returned obj.min should give the min value in the input array', () => {
  expect(expect(analyze([1, 2, 3, 4, 5]).min).toBe(1));
});

test('returned obj.length should give the length of the input array', () => {
  expect(expect(analyze([1, 2, 3, 4, 5]).length).toBe(5));
});
