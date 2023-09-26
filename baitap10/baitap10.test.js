const FindA = require("./baitap10")
test("so luong chuoi co chua ki tu a la 2 ",()=>{
    const arr = " apple icream dog fish";
    const Number = FindA(arr)
    expect(Number).toBe(2)
});
test("so luong chuoi co chua ki tu a la 5 ",()=>{
    const arr = " apple icream dag mana am fish";
    const Number = FindA(arr)
    expect(Number).toBe(5)
});
test("so luong chuoi co chua ki tu a la 2 ",()=>{
    const arr = " apple icream dog fish";
    const Number = FindA(arr)
    expect(Number).toBe(2)
});
test("so luong chuoi co chua ki tu a la 0 ",()=>{
    const arr = " drop btc dog fish";
    const Number = FindA(arr)
    expect(Number).toBe(0)
});
test("so luong chuoi co chua ki tu a la 1 ",()=>{
    const arr = " aaaa icrem dog fish";
    const Number = FindA(arr)
    expect(Number).toBe(1)
});
