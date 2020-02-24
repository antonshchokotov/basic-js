module.exports = function transform(arr) {
    // console.log(arr);
  if (!Array.isArray(arr)) throw new Error('Input is not an array');
  if (!arr[0]) return arr;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (/^--/.test(arr[i])) {
      if (arr[i] === '--discard-prev') {
        if (result.length !== 0 && i > 0) result.pop();
      } else if (arr[i] === '--double-prev') {
        if (i > 0) result.push(arr[i-1]);
      } else if (arr[i] === '--discard-next') {
        i++;
      } else if (arr[i] === '--double-next') {
        if (i !== arr.length - 1) result.push(arr[i+1]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}