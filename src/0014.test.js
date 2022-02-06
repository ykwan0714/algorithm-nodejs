const fib = require("./0014");

test("fib(4)", () => {
  expect(fib(4)).toBe(3);
});

test("fib(10)", () => {
  expect(fib(10)).toBe(55);
});

test("fib(28)", () => {
  expect(fib(28)).toBe(317811);
});

test("fib(35)", () => {
  expect(fib(35)).toBe(9227365);
});
