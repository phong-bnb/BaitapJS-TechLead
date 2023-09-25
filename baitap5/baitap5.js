let arr = [];

function findLongestString(arr) {
  return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
}

module.exports = findLongestString;