const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const getSeason = date => {
	if (date === undefined) return 'Unable to determine the time of year!';
	if (Object.getOwnPropertyNames(date).length > 0 || typeof date !== 'object') throw new Error('Invalid date!');
	if (date !== null) return date.getMonth() >= 0 && date.getMonth() < 12 ? ['winter', 'spring', 'summer', 'autumn', 'winter'][Math.round(date.getMonth() / 3)] : false;
	return false;
}

module.exports = {
  getSeason
};
