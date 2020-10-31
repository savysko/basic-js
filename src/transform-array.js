const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let changedArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        i++;
      } else if (arr[i] === '--discard-prev') {
        if (changedArr.length !== 0 && arr[i - 2] !== '--discard-next') {
          changedArr.pop();
        }
      } else if (arr[i] === '--double-next') {
        if (i < arr.length - 1) {
          changedArr.push(arr[i + 1]);
        }
      } else if (arr[i] === '--double-prev') {
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          changedArr.push(arr[i - 1]);
        }
      } else {
        changedArr.push(arr[i]);
      }
    }

    return changedArr;
  } else {
    throw Error();
  }
};
