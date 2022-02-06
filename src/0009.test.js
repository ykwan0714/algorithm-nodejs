const findLongestSubstring = require("./0009");

test(`findLongestSubstring("")`, () => {
  expect(findLongestSubstring("")).toBe(0);
});

test(`findLongestSubstring("rithmschool")`, () => {
  expect(findLongestSubstring("rithmschool")).toBe(7);
});

test(`findLongestSubstring("thisisawesome")`, () => {
  expect(findLongestSubstring("thisisawesome")).toBe(6);
});

test(`findLongestSubstring("thecatinthehat")`, () => {
  expect(findLongestSubstring("thecatinthehat")).toBe(7);
});

test(`findLongestSubstring("bbbbbb")`, () => {
  expect(findLongestSubstring("bbbbbb")).toBe(1);
});

test(`findLongestSubstring("longestsubstring")`, () => {
  expect(findLongestSubstring("longestsubstring")).toBe(8);
});

test(`findLongestSubstring("thisishowwedoit")`, () => {
  expect(findLongestSubstring("thisishowwedoit")).toBe(6);
});
