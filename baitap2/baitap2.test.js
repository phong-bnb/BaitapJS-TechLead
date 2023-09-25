const countElements = require("./baitap2")

test("run count to array 6", () => {
    expect(countElements([12,34,56,3,2,1])).toBe(6);
  });
  test("run count to array 9 ", () => {
    expect(countElements([456,786,5,6,5,3,3,2,2])).toBe(9);
  });
  test("run count to array 7 ", () => {
    expect(countElements([12,6,34,56,3,2,1])).toBe(7);
  });
  test("run count to array 3 ", () => {
    expect(countElements([12,2,1])).toBe(3);
  });
  test("run count to array 0", () => {
    expect(countElements([])).toBe(0);
  });