const FindStringCommon = require("./baitap2.4")
test("day so trung nhau dai nhat la ",()=>{
    const arr1 = "abcdzefghi";
    const arr2 = "abcwefghi"
    const list = FindStringCommon(arr1,arr2)
    expect(list).toEqual("efghi")
})