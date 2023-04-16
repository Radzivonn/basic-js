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
const encodeLine = str =>
	str.length === 0 ? '' :
	(str.match(/(.)\1*/g)).reduce((result, subStr) => result.concat(subStr.length > 1 ? subStr.length : '', subStr[0]), '');

module.exports = {
  encodeLine
};
