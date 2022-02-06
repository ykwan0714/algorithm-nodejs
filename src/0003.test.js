const sameFrequency = require("./0003");

test(`sameFrequency(182, 281)`, () => {
  expect(sameFrequency(182, 281)).toBe(true);
});

test(`sameFrequency(34, 14)`, () => {
  expect(sameFrequency(34, 14)).toBe(false);
});

test(`sameFrequency(3589578, 5879385)`, () => {
  expect(sameFrequency(3589578, 5879385)).toBe(true);
});

test(`sameFrequency(22, 222)`, () => {
  expect(sameFrequency(22, 222)).toBe(false);
});
