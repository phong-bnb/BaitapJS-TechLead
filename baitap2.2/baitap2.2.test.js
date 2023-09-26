const FindString = require("./biatap2.2")
test("tu co do dai lon nhat la chuoi ",()=>{
    const string = "chuoi nay co tu co do dai lon nhat ";
    const word = FindString(string);
    expect(word).toEqual("chuoi")
});
test("tu co do dai lon nhat la thanh ",()=>{
    const string = "sống cho hết đời thanh xuân ";
    const word = FindString(string);
    expect(word).toEqual("thanh")
})