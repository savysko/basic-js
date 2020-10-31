const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' || isNaN(parseInt(sampleActivity)) || sampleActivity < 1 || sampleActivity > 15) {
    return false;
  } else {
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseInt(sampleActivity)) / (Math.log(2) / HALF_LIFE_PERIOD));
  }
};
