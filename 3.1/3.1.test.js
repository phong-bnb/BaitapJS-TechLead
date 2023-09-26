const Findmin2 = require("./3.1")
test("số nho thứ hai là 11 ",()=>{
    const arr = [70, 11, 20,4, 4, 100];
    const list = Findmin2(arr)
    expect(list).toBe(11)
});
test("số lớn thứ hai là 1 ",()=>{
    const arr = [70,1, 11, 20,0, 4, 100];
    const list = Findmin2(arr)
    expect(list).toBe(1)
});