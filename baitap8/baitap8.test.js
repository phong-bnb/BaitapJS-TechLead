const Median = require("./baitap8")
test("So trung vi cuar day so la 3.5 ",()=>{
    const arr = [1,2,3,4,5,6]
    const list  = Median(arr);
    expect(list).toBe(3.5)
});
test("So trung vi cuar day so la 3 ",()=>{
    const arr = [1,2,3,4,5]
    const list  = Median(arr);
    expect(list).toBe(3)
});
test("So trung vi cuar day so la 6 ",()=>{
    const arr = [1,2,3,4,5,6,8,9,7,9,10]
    const list  = Median(arr);
    expect(list).toBe(6)
});
test("So trung vi cuar day so la 3.75 ",()=>{
    const arr = [1,2,3.5,4,5,6]
    const list  = Median(arr);
    expect(list).toBe(3.75)
});
test("So trung vi cuar day so la 3.5",()=>{
    const arr = [1,2,3.5,4,5,6,1]
    const list  = Median(arr);
    expect(list).toBe(3.5)
});