const merge = require("./0048");

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 4, 6, 8];

test(`merge(arr1, arr2)`, () => {
  expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 4, 5, 6, 8]);
});

test(`arr1`, () => {
  expect(arr1).toEqual([1, 3, 4, 5]);
});

test(`arr2`, () => {
  expect(arr2).toEqual([2, 4, 6, 8]);
});

const arr3 = [-2, -1, 0, 4, 5, 6];
const arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

test(`merge(arr3, arr4)`, () => {
  expect(merge(arr3, arr4)).toEqual([
    -3, -2, -2, -1, -1, 0, 2, 3, 4, 5, 5, 6, 7, 8,
  ]);
});

const arr5 = [3, 4, 5];
const arr6 = [1, 2];

test(`merge(arr5, arr6)`, () => {
  expect(merge(arr5, arr6)).toEqual([1, 2, 3, 4, 5]);
});

const names = ["Bob", "Ethel", "Christine"];
const otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

test(`merge(names, otherNames, stringLengthComparator)`, () => {
  expect(merge(names, otherNames, stringLengthComparator)).toEqual([
    "M",
    "Bob",
    "Colt",
    "Ethel",
    "Allison",
    "Christine",
    "SuperLongNameOMG",
  ]);
});
