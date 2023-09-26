const findMaxSubarraySum = require("./baitap2.5")
test("tong cua day so lien ke lon nhat la 7 ",()=>{
    const arr = [-2,-3,4,-1,-2,1,5,-3]
    const list = findMaxSubarraySum(arr)
    expect(list).toBe(7)
});
test("tong cua day so lien ke lon nhat la 0 ",()=>{
    const arr = []
    const list = findMaxSubarraySum(arr)
    expect(list).toBe(0)
});