module.exports = reverseString = str => {
  const arr = str.split('');
  let reverse = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }

  return reverse.join('');
};
