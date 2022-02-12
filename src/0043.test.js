const findRotatedIndex = require("./0043");

test(`findRotatedIndex([3, 4, 1, 2], 4)`, () => {
  expect(findRotatedIndex([3, 4, 1, 2], 4)).toEqual(1);
});

test(`findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)`, () => {
  expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toEqual(2);
});

test(`findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)`, () => {
  expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toEqual(6);
});

test(`findRotatedIndex([37, 44, 66, 102, 10, 22], 14)`, () => {
  expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toEqual(-1);
});

test(`findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)`, () => {
  expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toEqual(-1);
});

test(`findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)`, () => {
  expect(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)).toEqual(5);
});
