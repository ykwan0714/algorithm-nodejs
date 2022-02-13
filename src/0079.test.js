const findAllDuplicates = require("./0079");

test(`findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])`, () => {
  expect(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual(
    expect.objectContaining([2, 3])
  );
});

test(`findAllDuplicates([4, 3, 2, 1, 0])`, () => {
  expect(findAllDuplicates([4, 3, 2, 1, 0])).toEqual([]);
});

test(`findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])`, () => {
  expect(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])).toEqual(
    expect.objectContaining([3, 2, 1])
  );
});
