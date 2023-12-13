const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // let arr = [];
  // let additionalstr = '';
  // if (!options.separator) options.separator = '+';
  // if (!options.additionSeparator) options.separator = '|';
  // if (options.addition) {
  //   options.addition += '';
  //   if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  //   for (let i = 0; i < options.additionRepeatTimes; i++) {
  //     arr.push(options.addition)
  //   };
  //   additionalstr = arr.join(options.additionSeparator)
  // }
  // let arr2 = [];
  // if (!options.repeatTimes) options.repeatTimes = 1;
  // for (let i = 0; i < options.repeatTimes; i++) {
  //   arr2.push(str + additionalstr)
  // }
  // return arr2.join(options.separator)

}

module.exports = {
  repeater
};
