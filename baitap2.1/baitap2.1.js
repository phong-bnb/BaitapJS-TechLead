/**
 *
 * @param {array} arr
 * @returns {number}
 */
function SecondLargestNumber(arr) {
  const uniqueNumbers = [...new Set(arr)];

  uniqueNumbers.sort((a, b) => b - a);

  const filteredNumbers = uniqueNumbers.filter((number, index) => index === 1);

  if (filteredNumbers.length === 1) {
    return filteredNumbers[0];
  } else {
    return null;
  }
}

module.exports = SecondLargestNumber;
