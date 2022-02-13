const coinChange = require("./0076");

const denominations = [1, 5, 10, 25];

test(`coinChange(denominations, 1)`, () => {
  expect(coinChange(denominations, 1)).toEqual(1);
});

test(`coinChange(denominations, 2)`, () => {
  expect(coinChange(denominations, 2)).toEqual(1);
});

test(`coinChange(denominations, 5)`, () => {
  expect(coinChange(denominations, 5)).toEqual(2);
});

test(`coinChange(denominations, 10)`, () => {
  expect(coinChange(denominations, 10)).toEqual(4);
});

test(`coinChange(denominations, 25)`, () => {
  expect(coinChange(denominations, 25)).toEqual(13);
});

test(`coinChange(denominations, 45)`, () => {
  expect(coinChange(denominations, 45)).toEqual(39);
});

test(`coinChange(denominations, 100)`, () => {
  expect(coinChange(denominations, 100)).toEqual(242);
});

test(`coinChange(denominations, 145)`, () => {
  expect(coinChange(denominations, 145)).toEqual(622);
});

test(`coinChange(denominations, 1451)`, () => {
  expect(coinChange(denominations, 1451)).toEqual(425663);
});

test(`coinChange(denominations, 14511)`, () => {
  expect(coinChange(denominations, 14511)).toEqual(409222339);
});
