const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(source) {

  if (!Array.isArray(source)) {
    throw Error("'arr' parameter must be an instance of the Array!")
  }
  const target = Array(...source).map(value => { return { value, removed: false } })
  const len = target.length
  for (let i = 0; i < len; i++) {

    const el = target[i]
    const value = el.value

    if ((i == 0 && (value == '--discard-prev' || value == '--double-prev'))
        || (i == (len - 1) && (value == '--discard-next' || value == '--double-next'))
        || el.removed) {
      el.removed = true
      continue
    }
    switch (value)   {
      case '--discard-prev':
        target[i - 1].removed = el.removed = true
        break
      case '--double-prev':
        Object.assign(target[i], target[i - 1])
        break
      case '--discard-next':
        target[i + 1].removed = el.removed = true
        console.log('removed')
        break
      case '--double-next':
        Object.assign(target[i], target[i + 1])
        break
    }
  }

  return target.filter(({ removed }) => !removed).map(({value}) => value)
}

let source = [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]
console.log(transform(source))

module.exports = {
  transform
};
