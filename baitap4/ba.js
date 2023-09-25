const FindMax = require("./baitap4")
test("FindMax of arr to equal 7", () => {
    expect(FindMax([1,2,3,4,5,6,7])).toBe(7);
  });
  test("FindMax of arr to equal 7", () => {
    expect(FindMax([1,2,3,4,5,6,7])).toBe(7);
  });
  test("FindMax of arr to equal 4", () => {
    expect(FindMax([1,2,3,4])).toBe(4);
  });
  test("FindMax of arr to equal 4.5", () => {
    expect(FindMax([1,2,3,4,4.5])).toBe(4.5);
  });
  test("FindMax of an empty array to equal Number.NEGATIVE_INFINITY", () => {
    expect(FindMax([])).toBe(Number.NEGATIVE_INFINITY);
});