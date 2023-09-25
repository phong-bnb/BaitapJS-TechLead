/**
 * 
 * @param {array} arr 
 * @returns 
 */
function FindMax(arr) {
    if (arr.length === 0) {
        return Number.NEGATIVE_INFINITY; 
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max; 
}

module.exports = FindMax;