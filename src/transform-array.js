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
function transform(arr) {
  let array = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let discarded = false;
  arr.forEach((element, index) => {

    if (element !== undefined) {

      if (element !== "--double-next" && element !== "--double-prev" && element !== '--discard-prev' && element !== "--discard-next") {
        if (discarded) {

          array.push('')
          discarded = false
          return
        }
        else { array.push(element) }
      } else if (element === "--double-next") {
        if (index + 1 < arr.length) {
          array.push(arr[index + 1]);
        }
      } else if (element === '--double-prev') {
        if (index - 1 >= 0) {
          if (array[index - 1]) {
            array.push(array[index - 1]);
          }
        }
      } else if (element === '--discard-prev') {

        array.pop();
      } else if (element === '--discard-next') {

        discarded = true
        return
      }
    }
  });

  return array.filter(x => x);
}
//   arr.forEach((element, index) => {
//     let discarded = true;
//     if (element) {
//       if (element !== "--double-next" && element !== "--double-prev" && element !== '--discard-prev' && element !== "--discard-next") {
//         array.push(element);
//       } else if (element === "--double-next") {
//         if (index + 1 < arr.length) {
//           array.push(arr[index + 1]);
//         }
//       } else if (element === '--double-prev' && !discarded) {
//         if (index - 1 >= 0) {
//           array.push(arr[index - 1]);
//         }
//       } else if (element === '--discard-prev') {

//         array.pop();
//       } else if (element === '--discard-next') {
//         if (discarded) {

//           discarded = false;
//         }
//         index++;
//       }
//     }
//   });

//   return array;
// }

module.exports = {
  transform
};
