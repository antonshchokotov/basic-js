module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return 1 + (arr.filter(el => Array.isArray(el)).length > 0
                    ? this.calculateDepth(arr.flat())
                    : 0);
    }
};