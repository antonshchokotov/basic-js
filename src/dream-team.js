module.exports = function createDreamTeam(members /* array */) {
  return !Array.isArray(members)
      ? false
      : members
          .filter(x => typeof x === 'string')
          .map(x => x.match(/[a-z]/i)[0].toUpperCase())
          .sort()
          .join('');
};