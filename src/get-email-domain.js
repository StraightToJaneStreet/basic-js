const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(source) {
  const result = source.match(/@([^@]*)$/)
  return result[1]
}

console.log(getEmailDomain('ya@ya.ru@yandex.ru'))

module.exports = {
  getEmailDomain
};
