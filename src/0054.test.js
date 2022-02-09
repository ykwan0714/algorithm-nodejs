const mostDigits = require("./0054");

test(`mostDigits([1, 9, 10, 100, 99])`, () => {
  expect(mostDigits([1, 9, 10, 100, 99])).toEqual(3);
});

test(`mostDigits([100, 1010, 1, 500])`, () => {
  expect(mostDigits([100, 1010, 1, 500])).toEqual(4);
});

test(`mostDigits([0, 100000, 400, 12, 8])`, () => {
  expect(mostDigits([0, 100000, 400, 12, 8])).toEqual(6);
});

test(`mostDigits([])`, () => {
  expect(mostDigits([])).toEqual(0);
});
