const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let strIndex = [];
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      strIndex.push(i);
    }
  }
  return email.slice(strIndex[strIndex.length - 1] + 1);
}

module.exports = {
  getEmailDomain
};
