const power = require("./0010");

test(`power(2, 0)`, () => {
  expect(power(2, 0)).toBe(true);
});

test(`power(2, 2)`, () => {
  expect(power(2, 2)).toBe(true);
});

test(`power(2, 4)`, () => {
  expect(power(2, 4)).toBe(true);
});
