const someRecursive = require("./0017");

const isOdd = (val) => val % 2 !== 0;

test(`someRecursive([1, 2, 3, 4], isOdd)`, () => {
  expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true);
});

test(`someRecursive([4, 6, 8, 9], isOdd)`, () => {
  expect(someRecursive([4, 6, 8, 9], isOdd)).toBe(true);
});

test(`someRecursive([4, 6, 8], isOdd)`, () => {
  expect(someRecursive([4, 6, 8], isOdd)).toBe(false);
});

test(`someRecursive([4, 6, 8], (val) => val > 10)`, () => {
  expect(someRecursive([4, 6, 8], (val) => val > 10)).toBe(false);
});
