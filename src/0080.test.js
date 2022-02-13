const findPair = require("./0080");

test(`findPair([6, 1, 4, 10, 2, 4], 2)`, () => {
  expect(findPair([6, 1, 4, 10, 2, 4], 2)).toEqual(true);
});

test(`findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)`, () => {
  expect(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)).toEqual(true);
});

test(`findPair([4, -2, 3, 10], -6)`, () => {
  expect(findPair([4, -2, 3, 10], -6)).toEqual(true);
});

test(`findPair([6, 1, 4, 10, 2, 4], 22)`, () => {
  expect(findPair([6, 1, 4, 10, 2, 4], 22)).toEqual(false);
});

test(`findPair([], 0)`, () => {
  expect(findPair([], 0)).toEqual(false);
});

test(`findPair([5, 5], 0)`, () => {
  expect(findPair([5, 5], 0)).toEqual(true);
});

test(`findPair([-4, 4], -8)`, () => {
  expect(findPair([-4, 4], -8)).toEqual(true);
});

test(`findPair([-4, 4], 8)`, () => {
  expect(findPair([-4, 4], 8)).toEqual(true);
});

test(`findPair([1, 3, 4, 6], -2)`, () => {
  expect(findPair([1, 3, 4, 6], -2)).toEqual(true);
});

test(`findPair([0, 1, 3, 4, 6], -2)`, () => {
  expect(findPair([0, 1, 3, 4, 6], -2)).toEqual(true);
});
