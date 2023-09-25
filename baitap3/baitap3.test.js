const SquareNumber = require("./baitap3")
test("Square of a to equal 4", () => {
    expect(SquareNumber(2)).toBe(4);
  });
  test("Square of a to equal 16", () => {
    expect(SquareNumber(4)).toBe(16);
  });
  test("Square of a to equal 0", () => {
    expect(SquareNumber(0)).toBe(0);
  });
  test("Square of a to equal 25", () => {
    expect(SquareNumber(5)).toBe(25);
  });
  test("Square of a to equal 100", () => {
    expect(SquareNumber(10)).toBe(100);
  });