const maxSubarraySum = require("./0007");

test(`maxSubarraySum([100, 200, 300, 400], 2)`, () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
});

test(`maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)`, () => {
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});

test(`maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)`, () => {
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});

test(`maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)`, () => {
  expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
});

test(`maxSubarraySum([2, 3], 3)`, () => {
  expect(maxSubarraySum([2, 3], 3)).toBe(null);
});
