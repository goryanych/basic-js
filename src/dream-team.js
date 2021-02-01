const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const arr = [];

  for (const char of members) {
    if (char === String(char)) {
      arr.push(char.trim().toUpperCase().slice(0, 1));
    }
  }
  return arr.sort().join('');
};
