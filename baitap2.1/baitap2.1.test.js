const SecondLargetNumber = require("./baitap2.1")
test("số lớn thứ hai là 70 ",()=>{
    const arr = [70, 11, 20, 4, 100];
    const list = SecondLargetNumber(arr)
    expect(list).toBe(70)
});
test("số lớn thứ hai là 20 ",()=>{
    const arr = [70, 11, 20, 0, 70];
    const list = SecondLargetNumber(arr)
    expect(list).toBe(20)
});