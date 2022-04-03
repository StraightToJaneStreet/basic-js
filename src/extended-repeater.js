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
function repeater(source,
                  { separator = '+', repeatTimes = 1,
                    addition = '', additionRepeatTimes = 1, additionSeparator = '|'
                  }) {
  source = '' + source
  addition = '' + addition
  let answer = []
  let additionValue

  if (addition != undefined){
    const buffer = (addition + '*').repeat(additionRepeatTimes).split('*').filter(x => x != '')
    source = source.concat(buffer.join(additionSeparator))
  }
  answer = (source + '*').repeat(repeatTimes).split('*').filter(x => x != '')  
  return answer.join(separator)
}

// console.log(
//   repeater('STRING', { repeatTimes: 3, separator: '**', 
//           addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
//   )

module.exports = {
  repeater
};
