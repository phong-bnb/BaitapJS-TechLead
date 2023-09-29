const FindString = require("./4.6")
test(" so luong so lien tiep la 3  ",()=>{
    const arr = [1, 2, 3, 8, 6, 3]
    const list = FindString(arr)
    expect(list).toBe(3)
});
test(" so luong so lien tiep la 6  ",()=>{
    const arr = [1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9]
    const list = FindString(arr)
    expect(list).toBe(6)
});