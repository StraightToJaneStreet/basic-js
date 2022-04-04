const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(mt) {
  function isZero(mt, i, j) {
    if (i < 0) return false
    return mt[i][j] == 0
  }
  let answer = 0
  for (let i = 0; i < mt.length; i++) for (let j = 0; j < mt[i].length; j++) {
    if (!isZero(mt, i - 1, j)) {
      answer += mt[i][j]
    }
  }
  return answer
}

module.exports = {
  getMatrixElementsSum
};
