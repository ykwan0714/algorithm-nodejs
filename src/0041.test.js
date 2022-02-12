const countZeroes = require("./0041");

test(`countZeroes([1, 1, 1, 1, 0, 0])`, () => {
  expect(countZeroes([1, 1, 1, 1, 0, 0])).toEqual(2);
});

test(`countZeroes([1, 0, 0, 0, 0])`, () => {
  expect(countZeroes([1, 0, 0, 0, 0])).toEqual(4);
});

test(`countZeroes([0, 0, 0])`, () => {
  expect(countZeroes([0, 0, 0])).toEqual(3);
});

test(`countZeroes([1,1,1,1])`, () => {
  expect(countZeroes([1, 1, 1, 1])).toEqual(0);
});
