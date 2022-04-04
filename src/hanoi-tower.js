const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const disks = BigInt(disksNumber)
  const speed = BigInt(turnsSpeed)
  const turns = (1n << disks) - 1n
  const seconds = (turns * 60n * 60n) / ( speed )
  return { turns: Number(turns), seconds: Number(seconds) }
}

// console.log(calculateHanoi(38, 4308))

module.exports = {
  calculateHanoi
};
