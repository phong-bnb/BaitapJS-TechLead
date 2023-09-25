/**
 *
 * @param {array} arr
 */
function SelectionSort(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr
}
module.exports = SelectionSort;
