const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(x) {
  const source = x.toString()

  let answer = null

  for (i in source) {
    const modified = source.slice(0, i) + source.slice(+i + 1)
    if (answer == null || answer < Number.parseInt(modified)) {
      answer = +modified
    }
  }
  return answer
}

module.exports = {
  deleteDigit
};
