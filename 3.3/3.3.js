function Findtinhtien(arr) {
    const n = arr.length;
    const list = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && list[i] < list[j] + 1) {
                list[i] = list[j] + 1;
            }
        }
    }

    let maxLISTLength = 0;
    for (let i = 0; i < n; i++) {
        if (list[i] > maxLISTLength) {
            maxLISTLength = list[i];
        }
    }

    let longestSubsequence = [];
    let currentLength = maxLISTLength;

    for (let i = n - 1; i >= 0; i--) {
        if (list[i] === currentLength) {
            longestSubsequence.unshift(arr[i]);
            currentLength--;
        }
    }

    return longestSubsequence;
}


module.exports = Findtinhtien;
