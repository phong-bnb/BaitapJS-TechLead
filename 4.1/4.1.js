
/**
 * 
 * @param {array} arr
 * @param {number} count 
 * @returns {number}
 */
function SortBubble(arr) {
    let count = 0;
    let swapped;

    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false;
        
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                count++;
                swapped = true;
            }
        }

        if (!swapped) {
            break; 
        }
    }

    return count;
}

module.exports = SortBubble;
