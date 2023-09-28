const doDaiChuoiChungDaiNhat = require("./4.3")
test(" so ki tu trung nhau nhieu nhat la ",()=>{
    const arr = ["abcdefg", "abcde", "abcdef", "ab", "abc"];
    const ketQua = doDaiChuoiChungDaiNhat(arr);
    expect(ketQua).toBe(2)
});
test(" so ki tu trung nhau nhieu nhat la ",()=>{
    const arr = ["programming", "programmer", "program"];
    const ketQua = doDaiChuoiChungDaiNhat(arr);
    expect(ketQua).toBe(7)
});
