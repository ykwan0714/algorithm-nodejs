const linearSearch = require("./0018");

test(`linearSearch([10, 15, 20, 25, 30], 15)`, () => {
  expect(linearSearch([10, 15, 20, 25, 30], 15)).toEqual(1);
});

test(`linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)`, () => {
  expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toEqual(5);
});

test(`linearSearch([100], 100)`, () => {
  expect(linearSearch([100], 100)).toEqual(0);
});

test(`linearSearch([1, 2, 3, 4, 5], 6)`, () => {
  expect(linearSearch([1, 2, 3, 4, 5], 6)).toEqual(-1);
});

test(`linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)`, () => {
  expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toEqual(-1);
});

test(`linearSearch([100], 200)`, () => {
  expect(linearSearch([100], 200)).toEqual(-1);
});
