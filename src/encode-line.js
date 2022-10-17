const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 * baabbbcaa b2a3bc2a
 *
 */
function encodeLine(str) {

  let result = '';
  let count = 1;

  for (i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
      count++
    } else {
      result = result + count + str[i];
      count = 1;
    }

  }

  return result.replace(/[1]/g, '')

}

module.exports = {
  encodeLine
};
