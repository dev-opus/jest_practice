const analyze = arr => {
  const total = arr.reduce((prev, cur) => prev + cur, 0);
  const length = arr.length;

  const average = total / length;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return {
    average,
    max,
    min,
    length,
  };
};

module.exports = analyze;
