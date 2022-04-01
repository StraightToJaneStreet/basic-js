const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(source) {

  const simpleSum = source => {
    let answer = 0

    while (source > 0) {
      answer += source % 10
      source = Math.trunc(source / 10)
    }

    return answer
    
  }

  while (source > 9) {
    source = simpleSum(source)
  }

  return source

}

module.exports = {
  getSumOfDigits
};
