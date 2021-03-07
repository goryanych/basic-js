const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depthFilter(filter) {
    return filter.filter(item => Array.isArray(item));
  }

  depthArray(dep) {
    let depth = [];
    this.depthFilter(dep).forEach(item => {
      depth.push(this.calculateDepth(item));
    });

    return depth;
  }

  calculateDepth(arr) {
    let count = 1;
    this.depthArray(arr).forEach(item => {
      count = Math.max((1 + item), count);
    });

    return count;
  }
};
