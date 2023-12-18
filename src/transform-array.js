const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // if (Array.isArray(arr)) {
  //   arr.forEach((element, index) => {
  //     if (element) {
  //       if (element == '--double-next') {
  //         arr.splice(index + 1, 0, element)
  //         arr.splice(index, 1);
  //       }
  //       if (element == '--double-prev') {
  //         arr.splice(index - 1, 0, element)
  //         arr.splice(index, 1)
  //       }
  //       return arr;
  //     }
  //   });
  // }
}

module.exports = {
  transform
};
