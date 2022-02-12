const sortedFrequency = require("./0042");

test(`sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)`, () => {
  expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toEqual(4);
});

test(`sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)`, () => {
  expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toEqual(1);
});

test(`sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)`, () => {
  expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toEqual(2);
});

test(`sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)`, () => {
  expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toEqual(-1);
});
