const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let secretName = '';

  if (Array.isArray(members)) {
    members.forEach(el => { typeof(el) === 'string' ? secretName += el.trim()[0].toUpperCase() : secretName = secretName });
    return secretName.split('').sort().join('');
  } else {
    return false;
  }
};
