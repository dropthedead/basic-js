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
function repeater(str, options) {
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : '+';
  if (options.addition === false) options.addition = 'false'
  if (options.addition === null) options.addition = 'null'
  const addition = options.addition ? options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  const strString = String(str);
  const additionString = String(addition);

  let initStr = '';

  for (let i = 0; i < repeatTimes; i++) {
    initStr += strString;

    for (let j = 0; j < additionRepeatTimes; j++) {
      initStr += additionString;

      if (j < additionRepeatTimes - 1) {
        initStr += additionSeparator;
      }
    }

    if (i < repeatTimes - 1) {
      initStr += separator;
    }
  }

  return initStr;
}


module.exports = {
  repeater
};
