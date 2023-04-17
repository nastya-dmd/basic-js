const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  let maxNum = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i]
    }
  }

  const indexMaxNum = arr.indexOf(maxNum);

  if (indexMaxNum === 0) {
    arr.splice(indexMaxNum + 1, 1);

  } else {
    arr.splice(indexMaxNum - 1, 1);
  }

  return Number(arr.join(''))
}

module.exports = {
  deleteDigit
};
