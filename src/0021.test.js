const capitalizeWords = require("./0021");

test(`capitalizeWords(["car", "taco", "banana"])`, () => {
  expect(capitalizeWords(["car", "taco", "banana"])).toEqual([
    "CAR",
    "TACO",
    "BANANA",
  ]);
});
