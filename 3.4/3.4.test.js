const Findtrungnhau = require("./3.4");


test("day so trung nhau nhieu nhat la [foobar] ",()=>{
    const arr = ["hello", "world", "foobar", "barfoo", "he", "llo"]
    const list = Findtrungnhau(arr);
    console.log('qwewqe', list)
    expect(list).toEqual(["foobar", "barfoo"])
});