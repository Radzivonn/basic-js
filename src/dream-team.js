const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const createDreamTeam = members =>
	!Array.isArray(members) ? false :
	members.filter(elem => typeof elem === 'string')
		.map(member => member.trim().slice(0, 1).toUpperCase())
		.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('')

module.exports = {
  createDreamTeam
};
