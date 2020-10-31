const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    if (arr.some(i => Array.isArray(i))){
      let newArr = arr.reduce((count, acc) => count.concat(acc), []);

      return depth + this.calculateDepth(newArr);
    }

    return depth;
  }
};