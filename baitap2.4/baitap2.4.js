/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @returns {string}
 */
function FindStringCommon(str1, str2) {
    const length1 = str1.length;
    const length2 = str2.length;
    let maxLength = 0;
    let endIndex = 0;

    // Tạo một bảng để lưu trữ chiều dài của dãy con chung
    const dp = Array.from(Array(length1 + 1), () => Array(length2 + 1).fill(0));

    for (let i = 1; i <= length1; i++) {
        for (let j = 1; j <= length2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i - 1;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }

    if (maxLength === 0) {
        return "";
    } else {
        return str1.slice(endIndex - maxLength + 1, endIndex + 1);
    }
}
module.exports = FindStringCommon;