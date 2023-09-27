const SortBubble = require("./4.1")
test(" mang sau khi sap xep lai lai 4",()=>{
    const arr = [3, 1, 4, 2, 6, 5];
    const list = SortBubble(arr);
    expect(list).toBe(4)
})