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
const transform = arr => {
	if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
	let transformArr = [];
	const comands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
	arr.forEach((element, i, arr) => {
		if ((i < arr.length - 1 && element === '--double-next') && (!comands.includes(arr[i + 1]))) transformArr.push(arr[i + 1]);
		else if (i > 0 && element === '--double-prev' && !comands.includes(arr[i - 1]) && arr[i - 2] !== '--discard-next') transformArr.push(arr[i - 1]);
		else if ((arr[i + 1] !== '--discard-prev') && (arr[i - 1] !== '--discard-next') && (!comands.includes(element))) transformArr.push(element);
	});
	return transformArr;
}

module.exports = {
  transform
};
