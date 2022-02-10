const capitalizeFirst = require("./0019");

test(`capitalizeFirst(["car", "taco", "banana"])`, () => {
  expect(capitalizeFirst(["car", "taco", "banana"])).toEqual([
    "Car",
    "Taco",
    "Banana",
  ]);
});
