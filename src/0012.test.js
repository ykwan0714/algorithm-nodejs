const productOfArray = require("./0012");

test("productOfArray([1, 2, 3])", () => {
  expect(productOfArray([1, 2, 3])).toBe(6);
});

test("productOfArray([1, 2, 3, 10])", () => {
  expect(productOfArray([1, 2, 3, 10])).toBe(60);
});
