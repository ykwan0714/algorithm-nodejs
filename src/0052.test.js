const getDigit = require("./0052");

test(`getDigit(12345, 0)`, () => {
  expect(getDigit(12345, 0)).toEqual(5);
});

test(`getDigit(12345, 1)`, () => {
  expect(getDigit(12345, 1)).toEqual(4);
});

test(`getDigit(12345, 2)`, () => {
  expect(getDigit(12345, 2)).toEqual(3);
});

test(`getDigit(12345, 3)`, () => {
  expect(getDigit(12345, 3)).toEqual(2);
});

test(`getDigit(12345, 4)`, () => {
  expect(getDigit(12345, 4)).toEqual(1);
});

test(`getDigit(12345, 5)`, () => {
  expect(getDigit(12345, 5)).toEqual(0);
});

test(`getDigit(8987, 0)`, () => {
  expect(getDigit(8987, 0)).toEqual(7);
});

test(`getDigit(8987, 1)`, () => {
  expect(getDigit(8987, 1)).toEqual(8);
});

test(`getDigit(8987, 2)`, () => {
  expect(getDigit(8987, 2)).toEqual(9);
});

test(`getDigit(8987, 3)`, () => {
  expect(getDigit(8987, 3)).toEqual(8);
});

test(`getDigit(8987, 4)`, () => {
  expect(getDigit(8987, 4)).toEqual(0);
});
