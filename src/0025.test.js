const binarySearch = require("./0025");

test(`linearSearch([10, 15, 20, 25, 30], 15)`, () => {
  expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
});

test(`linearSearch([10, 15, 20, 25, 30], 15)`, () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
});

test(`linearSearch([10, 15, 20, 25, 30], 15)`, () => {
  expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
});

test(`linearSearch([10, 15, 20, 25, 30], 15)`, () => {
  expect(binarySearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
});

test(`linearSearch([10, 15, 20, 25, 30], 15)`, () => {
  expect(
    binarySearch(
      [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
      ],
      10
    )
  ).toEqual(2);
});

test(`linearSearch([10, 15, 20, 25, 30], 15)`, () => {
  expect(
    binarySearch(
      [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
      ],
      95
    )
  ).toEqual(16);
});

test(`linearSearch([10, 15, 20, 25, 30], 15)`, () => {
  expect(
    binarySearch(
      [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
      ],
      100
    )
  ).toEqual(-1);
});
