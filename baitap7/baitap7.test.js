const SortList = require("./baitap7");
test(" mang sau khi sap xep la ['apple', 'banana', 'circle']", () =>{
    const arr = ['apple','circle','banana'];
    const list = SortList(arr);
    expect(list).toEqual(['apple', 'banana', 'circle'])
});
test(" mang sau khi sap xep la ['allin','apple','banana', 'circle']", () =>{
    const arr = ['apple','circle','banana','allin'];
    const list = SortList(arr);
    expect(list).toEqual(['allin','apple','banana', 'circle'])
});
test(" mang sau khi sap xep la ['apple', 'banana', 'circle','doctor','gray']", () =>{
    const arr = ['doctor','apple','circle','gray','banana'];
    const list = SortList(arr);
    expect(list).toEqual(['apple', 'banana', 'circle','doctor','gray'])
});
test(" mang sau khi sap xep la ['apple', 'banana', 'circle','f']", () =>{
    const arr = ['apple','f','circle','banana'];
    const list = SortList(arr);
    expect(list).toEqual(['apple', 'banana', 'circle','f'])
});
test(" mang sau khi sap xep la ['addfdsfsdf', 'circle','nayner']", () =>{
    const arr = ['addfdsfsdf','circle','nayner'];
    const list = SortList(arr);
    expect(list).toEqual(['addfdsfsdf',  'circle','nayner',])
});
