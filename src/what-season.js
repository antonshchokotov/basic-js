module.exports = function getSeason(date /* date */) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]'
      || isNaN(date)) throw new Error('error');

  const seasons = ['winter', 'winter', 'spring',
                   'spring', 'spring', 'summer',
                   'summer', 'summer', 'autumn',
                   'autumn', 'autumn', 'winter'];
  return seasons[date.getMonth()];
};