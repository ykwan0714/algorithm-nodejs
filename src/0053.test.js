const digitCount = require("./0053");

test(`digitCount(1)`, () => {
  expect(digitCount(1)).toEqual(1);
});

test(`digitCount(9)`, () => {
  expect(digitCount(9)).toEqual(1);
});

test(`digitCount(25)`, () => {
  expect(digitCount(1)).toEqual(2);
});

test(`digitCount(314)`, () => {
  expect(digitCount(1)).toEqual(3);
});

test(`digitCount(1234)`, () => {
  expect(digitCount(1)).toEqual(4);
});

test(`digitCount(77777)`, () => {
  expect(digitCount(1)).toEqual(5);
});
