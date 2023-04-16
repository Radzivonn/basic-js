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
const getMatrixElementsSum = matrix => {
	return matrix.reduce((matrixSum, arr, i) => {
		return matrixSum + arr.reduce((sum, num, j) => {
			if (i === 0) return sum + num;
			else return sum + (matrix[i - 1][j] !== 0 ? num : 0);
		}, 0);
	}, 0);
}

module.exports = {
  getMatrixElementsSum
};
