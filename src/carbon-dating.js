const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    !Number(sampleActivity) ||
    !(typeof sampleActivity === 'string')
    || (sampleActivity < 0 || sampleActivity > 15)) {
    return false;
  }

  const calculatingTime = Math.ceil(MODERN_ACTIVITY / sampleActivity);
  const reactionRate = Math.ceil(0.693 / HALF_LIFE_PERIOD);
  const result = calculatingTime / reactionRate;

  return result;
};
