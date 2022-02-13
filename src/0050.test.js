const pivot = require("./0050");

const arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
const arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
const arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a, b) {
  return a.length - b.length;
}

test(`pivot(arr1)`, () => {
  expect(pivot(arr1)).toEqual(3);
});

test(`pivot(arr2)`, () => {
  expect(pivot(arr2)).toEqual(4);
});

test(`pivot(arr3, strLength)`, () => {
  expect(pivot(arr3, strLength)).toEqual(1);
});

//

test(`arr1.slice(0, 3).sort((a, b) => a - b)`, () => {
  expect(arr1.slice(0, 3).sort((a, b) => a - b)).toEqual([2, 3, 4]);
});

test(`arr1.slice(3).sort((a, b) => a - b))`, () => {
  expect(arr1.slice(3).sort((a, b) => a - b)).toEqual([5, 7, 8, 9, 10, 20]);
});

//

test(`arr2.slice(0, 4).sort((a, b) => a - b)`, () => {
  expect(arr2.slice(0, 4).sort((a, b) => a - b)).toEqual([0, 2, 4, 5]);
});

test(`arr2.slice(3).sort((a, b) => a - b)`, () => {
  expect(arr2.slice(4).sort((a, b) => a - b)).toEqual([8, 10, 11, 12, 13, 16]);
});

//

test(`arr3.slice(0, 1).sort(strLength)`, () => {
  expect(arr3.slice(0, 1).sort(strLength)).toEqual(["Blue"]);
});

test(`arr3.slice(1).sort(strLength)`, () => {
  expect(arr3.slice(1).sort(strLength)).toEqual([
    "LilBub",
    "Grumpy",
    "Garfield",
    "Heathcliff",
  ]);
});
