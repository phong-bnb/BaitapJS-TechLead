const SelectionSort = require("./baitap6");
test("hello bay be [1,2,3,4,5,6]", ()=>{
    const arr = [6,5,4,3,2,1];
    const logger = SelectionSort(arr)
    console.log(logger)
    expect(logger).toEqual([1,2,3,4,5,6]);
});
test("hello bay be [1,2,3,10,56,1000]", ()=>{
    const arr = [10,1000,56,3,2,1];
    const logger = SelectionSort(arr)
    console.log(logger)
    expect(logger).toEqual([1,2,3,10,56,1000]);
});
test("hello bay be [1,2,3,4.5,5,6]", ()=>{
    const arr = [6,5,4.5,3,2,1];
    const logger = SelectionSort(arr)
    console.log(logger)
    expect(logger).toEqual([1,2,3,4.5,5,6]);
});
test("hello bay be []", ()=>{
    const arr = [];
    const logger = SelectionSort(arr)
    console.log(logger)
    expect(logger).toEqual([]);
});
test("hello bay be [1,1,2,2,2,3,4,5,6,6,8]", ()=>{
    const arr = [6,5,4,3,2,1,1,2,2,6,8];
    const logger = SelectionSort(arr)
    console.log(logger)
    expect(logger).toEqual([1,1,2,2,2,3,4,5,6,6,8]);
});
