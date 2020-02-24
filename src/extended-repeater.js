module.exports = function repeater(string, options) {
  const addition = Array(options.additionRepeatTimes || 1)
            .fill(options.addition !== undefined
                    ? String(options.addition)
                    : '')
            .join((options.additionSeparator || '|')) || '';
  const result = Array(options.repeatTimes || 1)
            .fill(String(string)+addition)
            .join(options.separator || '+');
  return result;
}