const isSubsequence = require("./0006");

test(`isSubsequence("hello", "hello world")`, () => {
  expect(isSubsequence("hello", "hello world")).toBe(true);
});

test(`isSubsequence("sing", "string")`, () => {
  expect(isSubsequence("sing", "string")).toBe(true);
});

test(`isSubsequence("abc", "abracadabra")`, () => {
  expect(isSubsequence("abc", "abracadabra")).toBe(true);
});

test(`isSubsequence("abc", "acb")`, () => {
  expect(isSubsequence("abc", "acb")).toBe(false);
});
