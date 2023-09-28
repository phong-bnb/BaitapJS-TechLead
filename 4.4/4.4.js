/**
 * 
 * @param {array} arr 
 * @returns {number}
 */
function FindTich(arr) {
    let count = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
          if (i !== j && i !== k && j !== k) {
            const product = arr[i] * arr[j] * arr[k];
            if (product > count) {
              count = product;
            }
          }
        }
      }
    }
    
    return count;
  }
  
 
  
  module.exports=FindTich
  