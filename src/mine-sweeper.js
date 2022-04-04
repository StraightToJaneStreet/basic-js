const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(mt) {
  function isMine(mt, i, j) {
    if (i < 0 || j < 0 || i >= mt.length || j >= mt[i].length) return 0
    return +mt[i][j]
  }
  const field = []
  for (let i = 0; i < mt.length; i++) {
    field.push([])
    for (let j = 0; j < mt[i].length; j++) {
      field[i].push(
        isMine(mt, i - 1, j) +
        isMine(mt, i + 1, j) +
        isMine(mt, i, j - 1) +
        isMine(mt, i, j + 1) +
        isMine(mt, i - 1, j - 1) +
        isMine(mt, i + 1, j - 1) +
        isMine(mt, i - 1, j + 1) +
        isMine(mt, i + 1, j + 1)
      )
    }
  }

  return field
}

module.exports = {
  minesweeper
};
