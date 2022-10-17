const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  
  const arr = ('' + n).split('')
  let number = arr.map(Number);
  var sum = 0;
 
  for (var i = 0; i < number.length; i++) {
    sum += number[i];

  }
  if (sum > 9) {
    let x = [...sum + ''].map(Number);

    return x.reduce((a, b) => a + b)

  }
  return sum

}

module.exports = {
  getSumOfDigits
};
