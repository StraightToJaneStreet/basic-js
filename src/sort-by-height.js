const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(source) {
  const cells = source.map(x => x == -1 ? true : false)
  let arr = source.filter(x => x != -1)
  arr.sort((a, b) => a - b)
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i] == false) {
      cells[i] = arr.pop()
    } else {
      cells[i] = -1
    }
  }
  return cells
}

module.exports = {
  sortByHeight
};
