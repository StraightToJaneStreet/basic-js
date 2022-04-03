const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length == 0)
    return false
  const answer = members
    .filter(x => typeof x == 'string')
    .filter(x => x.length > 0)
    .map(x => x.trim())
    .map(x => x[0])
    .map(x => x.toUpperCase())
    .sort()
    .join('')
  return answer
}

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']))

module.exports = {
  createDreamTeam
};
