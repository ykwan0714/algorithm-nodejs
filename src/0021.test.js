const capitalizeWords = require("./0021");

test(`capitalizeWords(["car", "taco", "banana"])`, () => {
  expect(capitalizeWords(["car", "taco", "banana"])).toBe([
    "CAR",
    "TACO",
    "BANANA",
  ]);
});
