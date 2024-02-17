const calculator = require("./Calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts 5 - 3 to equal 2", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("multiplies 4 * 3 to equal 12", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("divides 10 / 2 to equal 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
