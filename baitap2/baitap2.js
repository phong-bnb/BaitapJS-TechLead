/**
 * @param {array} arr
 * @returns {number}
 */
let arr = [12,23,3,2,223,2];
function countElements(arr) {
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
      count++;
   }
   return count;
}
module.exports = countElements;