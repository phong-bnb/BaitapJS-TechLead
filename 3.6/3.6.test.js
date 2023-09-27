const Findtb2arr = require("./3.6")
test("so trung binh la 2 ",()=>{
    const arr1 = [1,2,3];
    const arr2 = [1,2,3];
    const list = Findtb2arr(arr1,arr2)
    expect(list).toBe(2)
});
test("so trung binh la 10 ",()=>{
    const arr1 = [10,0,20];
    const arr2 = [10,10,10];
    const list = Findtb2arr(arr1,arr2)
    expect(list).toBe(10)
});
test("so trung binh la 3.5 ",()=>{
    const arr1 = [4,5,6];
    const arr2 = [1,2,3];
    const list = Findtb2arr(arr1,arr2)
    expect(list).toBe(3.5)
});