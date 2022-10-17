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

  const arr = email.split('');
  let x = arr.indexOf('@');

  x = x + 1;
  let y = arr.splice(x);
  let p = y.indexOf('@')
 
  p = p + 1
  let a = y.splice(p);
  let str = a.join();
  return  str.replaceAll(',', '');
}

module.exports = {
  getEmailDomain
};
