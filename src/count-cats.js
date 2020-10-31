const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catNumber = 0;

  matrix.forEach(el => { el.forEach(e => { e === '^^' ? catNumber += 1 : catNumber = catNumber } )});
  
  return catNumber;
};
