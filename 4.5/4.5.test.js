const SortStringLength = require("./4.5")
test(" danh sach sap xep lai la ['the lazy dog jumps over the fence', 'the quick brown fox', 'the cat in the hat']",()=>{
    const inputStrings = ['the quick brown fox', 'the lazy dog jumps over the fence', 'the cat in the hat'];
  const list = SortStringLength(inputStrings);
  expect(list).toEqual(['the lazy dog jumps over the fence', 'the quick brown fox', 'the cat in the hat']
  )
});