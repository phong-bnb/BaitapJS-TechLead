const SelectionSort = require("./baitap6");
test("hello bay be [1,2,3,4,5,6]", ()=>{
    const arr = [6,5,4,3,2,1];
    const logger = SelectionSort(arr)
    console.log(logger)
    expect(logger).toEqual([1,2,3,4,5,6]);
});