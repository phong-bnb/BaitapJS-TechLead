const CountWords = require("./baitap9")
test('so tu trong chuoi arr la 2 ',()=>{
    const string = "hell word";
    const Number = CountWords(string);
    expect(Number).toBe(2)
});
test('so tu trong chuoi arr la 1 ',()=>{
    const string = "hello";
    const Number = CountWords(string);
    expect(Number).toBe(1)
});
test('so tu trong chuoi arr la 2 ',()=>{
    const string = "hello, word";
    const Number = CountWords(string);
    expect(Number).toBe(2)
});
test('so tu trong chuoi arr la 4 ',()=>{
    const string = "hello word, good morning";
    const Number = CountWords(string);
    expect(Number).toBe(4)
});

