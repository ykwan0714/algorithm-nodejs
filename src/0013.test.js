const recursiveRange = require("./0013");

test("recursiveRange(6)", () => {
  expect(recursiveRange(6)).toBe(21);
});

test("recursiveRange(10)", () => {
  expect(recursiveRange(10)).toBe(55);
});
