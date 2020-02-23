module.exports = function countCats(backyard /* matrix */) {
  return backyard.flat().reduce((acc, i) => acc += /^\^\^$/.test(i) ? 1 : 0, 0);
};