const constructNote = require("./0078");

test(`constructNote("aa", "abc")`, () => {
  expect(constructNote("aa", "abc")).toEqual(false);
});

test(`constructNote("abc", "dcba")`, () => {
  expect(constructNote("abc", "dcba")).toEqual(true);
});

test(`constructNote("aabbcc", "bcabcaddff")`, () => {
  expect(constructNote("aabbcc", "bcabcaddff")).toEqual(true);
});
