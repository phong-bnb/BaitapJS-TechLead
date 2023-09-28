const FindTich = require("./4.4")
test("tich lon nhat cua 3 so bat ki la 24",()=>{
    const arr = [ 0, 1, 2, 3, 4];
    const list = FindTich(arr);
    expect(list).toBe(24)
});
test("tich lon nhat cua 3 so bat ki la 200",()=>{
    const arr = [-10, -5, 0, 1, 2, 3, 4];
    const list = FindTich(arr);
    expect(list).toBe(200)
});