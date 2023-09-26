const FindNumber = require("./baitap2.3")
test("tong cac so chia het cho ca 3 va 5 la 45 ",()=>{
    const arr =[23,16,57,45,24,89]
    const number = FindNumber(arr)
    expect(number).toBe(45)
});
test("tong cac so chia het cho ca 3 va 5 la 45 ",()=>{
    const arr =[23,16,57,42.5,2.5,24,89]
    const number = FindNumber(arr)
    expect(number).toBe(45)
});
