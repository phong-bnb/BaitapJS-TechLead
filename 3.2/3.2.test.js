const FindSpaceMax = require("./3.2") 
test("chênh lệch max la 7 ",()=>{
    const arr = [1,2,3,4,5,6,7,8]
    const list = FindSpaceMax(arr)
    expect(list).toBe(7)
});
test("chênh lệch max la 1000 ",()=>{
    const arr = [0,2,3,4,5,6,7,1000]
    const list = FindSpaceMax(arr)
    expect(list).toBe(1000)
});
test("chênh lệch max la 10 ",()=>{
    const arr = [-2,1,2,3,4,5,6,7,8]
    const list = FindSpaceMax(arr)
    expect(list).toBe(10)
});