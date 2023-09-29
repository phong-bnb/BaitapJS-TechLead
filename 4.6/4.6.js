/**
 * 
 * @param {array} arr 
 * @returns {number}
 */

function FindString(arr) {
    if (arr.length === 0) {
        return 0; 
    }


    let longestCount = 1;
    let currentCount = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentCount++;
        } else if (arr[i] !== arr[i - 1]) {
            currentCount = 1;
        }

        if (currentCount > longestCount) {
            longestCount = currentCount;
        }
    }

    return longestCount;
}


module.exports=FindString