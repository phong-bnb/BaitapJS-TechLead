const Findtinhtien = require("./3.3")
test("day so tinh tien la [3,10,20]",()=>{
    const arr = [3, 10, 2, 1, 20];
const longestSubsequence = Findtinhtien(arr);
expect(longestSubsequence).toEqual([3,10,20])
});
test("day so tinh tien la [3, 7, 40, 80]",()=>{
    const arr = [50, 3, 10, 7, 40, 80 ];
const longestSubsequence = Findtinhtien(arr);
expect(longestSubsequence).toEqual([3, 7, 40, 80])
});