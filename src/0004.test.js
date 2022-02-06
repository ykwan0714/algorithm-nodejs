const areThereDuplicates = require("./0004");

test(`areThereDuplicates(1, 2, 3)`, () => {
  expect(areThereDuplicates(1, 2, 3)).toBe(false);
});

test(`areThereDuplicates(1, 2, 2)`, () => {
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
});

test(`areThereDuplicates("a", "b", "c", "a")`, () => {
  expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
});

test(`areThereDuplicates(1, 2, 3, 4, 1, 5, 6)`, () => {
  expect(areThereDuplicates(1, 2, 3, 4, 1, 5, 6)).toBe(true);
});
