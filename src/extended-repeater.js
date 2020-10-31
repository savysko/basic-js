const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeaterOptions = options;
  let result = [];
  
  repeaterOptions.separator = repeaterOptions.separator || '+';
  repeaterOptions.additionSeparator = repeaterOptions.additionSeparator || '|';

  if (repeaterOptions.addition === null) {
    repeaterOptions.addition = 'null';
  }
  else {
    repeaterOptions.addition = repeaterOptions.addition;
  }

  result = new Array(repeaterOptions.additionRepeatTimes).fill(repeaterOptions.addition).join(repeaterOptions.additionSeparator);

  return new Array(repeaterOptions.repeatTimes).fill(str + result).join(repeaterOptions.separator);
};
  