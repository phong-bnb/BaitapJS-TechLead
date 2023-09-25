const findLongestString = require("./baitap5");

test("longestString of arr is 3234wsdfsdf345", () => {
  const arr = ['123123', 'thfg', '3234wsdfsdf345'];
  const longestString = findLongestString(arr);
  expect(longestString).toBe('3234wsdfsdf345');
});
test("longestString of arr is 3234wsdfsdf345", () => {
    const arr = ['123123', 'thfg', '3234wsdfsdf345'];
    const longestString = findLongestString(arr);
    expect(longestString).toBe('3234wsdfsdf345');
  });
  test("longestString of arr is gio ta chang con chi mai trang tay ma thoi", () => {
    const arr = ['123123', 'thfg', 'gio ta chang con chi mai trang tay ma thoi'];
    const longestString = findLongestString(arr);
    expect(longestString).toBe('gio ta chang con chi mai trang tay ma thoi');
  });
  test("longestString of arr is 3234wsdfsdf345", () => {
    const arr = ['123123', 'thfg','baybe', '3234wsdfsdf345'];
    const longestString = findLongestString(arr);
    expect(longestString).toBe('3234wsdfsdf345');
  });
  test("longestString of arr is ''", () => {
    const arr = [];
    const longestString = findLongestString(arr);
    expect(longestString).toBe('');
  });
