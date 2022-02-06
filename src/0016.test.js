const isPalindrome = require("./0016");

test(`isPalindrome("awesome")`, () => {
  expect(isPalindrome("awesome")).toBe(false);
});

test(`isPalindrome("foobar")`, () => {
  expect(isPalindrome("foobar")).toBe(false);
});

test(`isPalindrome("tacocat")`, () => {
  expect(isPalindrome("tacocat")).toBe(true);
});

test(`isPalindrome("amanaplanacanalpanama")`, () => {
  expect(isPalindrome("amanaplanacanalpanama")).toBe(true);
});

test(`isPalindrome("amanaplanacanalpandemonium")`, () => {
  expect(isPalindrome("amanaplanacanalpandemonium")).toBe(false);
});
