const FindInteger = require("./3.5")
test(" so nguyen duong nho nhat thoa man dieu kien la 12 ",()=>{
    const inputArray = [1,2,3,5];
    const list = FindInteger(inputArray);
    expect(list).toBe(12)
});
test(" so nguyen duong nho nhat thoa man dieu kien la 1",()=>{
    const inputArray = [];
    const list = FindInteger(inputArray);
    expect(list).toBe(1)
});
test(" so nguyen duong nho nhat thoa man dieu kien la 42 ",()=>{
    const inputArray = [1, 2, 3, 7, 8, 20];
    const list = FindInteger(inputArray);
    expect(list).toBe(42)
});
test(" so nguyen duong nho nhat thoa man dieu kien la 12 ",()=>{
    const inputArray = [1,2,3,5];
    const list = FindInteger(inputArray);
    expect(list).toBe(12)
});