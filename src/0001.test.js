const validAnagram = require("./0001");

test(`validAnagram("", "")`, () => {
  expect(validAnagram("", "")).toBe(true);
});

test(`validAnagram("aaz", "zza")`, () => {
  expect(validAnagram("aaz", "zza")).toBe(false);
});

test(`validAnagram("anagram", "nagaram")`, () => {
  expect(validAnagram("anagram", "nagaram")).toBe(true);
});

test(`validAnagram("rat", "car")`, () => {
  expect(validAnagram("rat", "car")).toBe(false);
});

test(`validAnagram("awesome", "awesom")`, () => {
  expect(validAnagram("awesome", "awesom")).toBe(false);
});

test(`validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")`, () => {
  expect(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")).toBe(
    false
  );
});

test(`validAnagram("qwerty", "qeywrt")`, () => {
  expect(validAnagram("qwerty", "qeywrt")).toBe(true);
});

test(`validAnagram("texttwisttime", "timetwisttext")`, () => {
  expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
});
