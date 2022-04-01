const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2

 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let answer = 0

  const storage1 = {}, storage2 = {}
  const fillStorage = (storage, str) => [...str].forEach(c => c in storage ? storage[c]++ : storage[c] = 1)

  fillStorage(storage1, s1)
  fillStorage(storage2, s2)

  Object.entries(storage1).forEach(([c, count]) => {
    if (!(c in storage2)) {
      storage2[c] = 0
    }
    answer += Math.min(storage1[c], storage2[c])
  })

  return answer

}

module.exports = {
  getCommonCharacterCount
};
