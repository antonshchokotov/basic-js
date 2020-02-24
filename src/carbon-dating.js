const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity /* string */) {
  if (typeof sampleActivity !== 'string') return false;
  const finalActivity = parseFloat(sampleActivity);
  if (finalActivity <= 0 || finalActivity > 15 || isNaN(finalActivity)) {
    return false;
  }
  const time = Math.ceil( Math.log(MODERN_ACTIVITY / finalActivity)
                          / (0.693 / HALF_LIFE_PERIOD) );
  return time;
};