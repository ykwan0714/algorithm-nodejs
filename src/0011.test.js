const factorial = require("./0011");

test("factorial(1)", () => {
  expect(factorial(1)).toBe(1);
});

test("factorial(2)", () => {
  expect(factorial(2)).toBe(2);
});

test("factorial(4)", () => {
  expect(factorial(4)).toBe(24);
});

test("factorial(7)", () => {
  expect(factorial(7)).toBe(5040);
});
