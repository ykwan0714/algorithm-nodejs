const flatten = require("./0018");

test(`flatten([1, 2, 3, [4, 5]])`, () => {
  expect(flatten([1, 2, 3, [4, 5]])).toBe([1, 2, 3, 4, 5]);
});

test(`flatten([1, [2, [3, 4], [[5]]]])`, () => {
  expect(flatten([1, [2, [3, 4], [[5]]]])).toBe([1, 2, 3, 4, 5]);
});

test(`flatten([[1], [2], [3]])`, () => {
  expect(flatten([[1], [2], [3]])).toBe([1, 2, 3]);
});

test(`flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])`, () => {
  expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toBe([1, 2, 3]);
});
