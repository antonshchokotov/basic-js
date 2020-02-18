module.exports = function countCats(backyard /* matrix */) {
  let count = 0;
  backyard.forEach(row => row.forEach(el => count += /^\^\^$/.test(el) ? 1 : 0));
  return count;
};