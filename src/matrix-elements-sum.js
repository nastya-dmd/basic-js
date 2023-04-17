const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  let sumElements;

  for (let i = 0; i < matrix.length; i++) {
    if(matrix.length === 1){
      return 0
    }

    sumElements = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[0] && matrix[1]) {
        sumElements += matrix[0][j];
        sumElements += matrix[1][j];
      }
      if (matrix[1][j] !== 0) {
        sumElements += matrix[2][j]
      }
    }
  }
  return sumElements
}

module.exports = {
  getMatrixElementsSum
};
