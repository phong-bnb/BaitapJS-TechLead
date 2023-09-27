const FindNumberCongBang = require("./4.2")
test('should (first)', () => { 
    const arr = [1, 2, 3, 4, 5]
    const stt = 5;
    const list = FindNumberCongBang(arr,stt)
    expect(list).toBe(2)
 })