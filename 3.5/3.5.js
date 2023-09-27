/**
 * 
 * @param {array} arr 
 * @returns {number}
 */
function FindInteger(arr) {
    arr.sort((a, b) => a - b); 
    let result = 1; 
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= result) {
        result += arr[i]; 
      } else {
        break;
      }
    }
  
    return result;
  }
  

  module.exports = FindInteger;
  