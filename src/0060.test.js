const BinarySearchTree = require("./0060");

const firstBinarySearchTree = new BinarySearchTree();

firstBinarySearchTree.insert(15);
firstBinarySearchTree.insert(20);
firstBinarySearchTree.insert(10);
firstBinarySearchTree.insert(12);

test(`firstBinarySearchTree.root.value`, () => {
  expect(firstBinarySearchTree.root.value).toEqual(15);
});

test(`firstBinarySearchTree.root.right.value`, () => {
  expect(firstBinarySearchTree.root.right.value).toEqual(20);
});

test(`firstBinarySearchTree.root.left.right.value`, () => {
  expect(firstBinarySearchTree.root.left.right.value).toEqual(12);
});

const secondBinarySearchTree = new BinarySearchTree();

secondBinarySearchTree.insert(15).insert(20).insert(10).insert(12);

test(`secondBinarySearchTree.root.value`, () => {
  expect(secondBinarySearchTree.root.value).toEqual(15);
});

test(`secondBinarySearchTree.root.right.value`, () => {
  expect(secondBinarySearchTree.root.right.value).toEqual(20);
});

test(`secondBinarySearchTree.root.left.right.value`, () => {
  expect(secondBinarySearchTree.root.left.right.value).toEqual(12);
});
