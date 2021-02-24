const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const month = date.getMonth();

  if (month <= 1 || month === 11) {
    return seasons[0];
  } else if (month > 1 && month <= 4) {
    return seasons[1];
  } else if (month > 4 && month <= 7) {
    return seasons[2];
  } else if (month > 7 && month <= 10) {
    return seasons[3];
  }

};

