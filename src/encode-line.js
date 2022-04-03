const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(source){

    if (source.length == 0)
        return ''

    let parts = []

    let segmentLen = 1
    let segmentChar = source[0]

    for (let i = 1; i < source.length; i++) {

        let char = source[i]

        if (char != segmentChar) {

            parts.push([segmentLen, segmentChar])

            segmentLen  = 1
            segmentChar = char
        } else {
            segmentLen++
        }
    }
    parts.push([segmentLen, segmentChar])
    console.log(parts + 'asdasdasd')
    return parts.map(([count, c]) => (count > 1 ? count : '') + c).join('')
}

console.log(encodeLine(''))
module.exports = {
  encodeLine
};
