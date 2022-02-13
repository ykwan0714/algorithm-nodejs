const BinarySearchTree = require("./0066");

const firstBinarySearchTree = new BinarySearchTree();
firstBinarySearchTree.insert(15);
firstBinarySearchTree.insert(20);
firstBinarySearchTree.insert(10);
firstBinarySearchTree.insert(12);

test(`firstBinarySearchTree.isBalanced()`, () => {
  expect(firstBinarySearchTree.isBalanced()).toEqual(true);
});

const secondBinarySearchTree = new BinarySearchTree();

secondBinarySearchTree.insert(5);

test(`secondBinarySearchTree.insert(5) => secondBinarySearchTree.isBalanced()`, () => {
  expect(secondBinarySearchTree.isBalanced()).toEqual(true);
});

secondBinarySearchTree.insert(6);

test(`secondBinarySearchTree.insert(6) => secondBinarySearchTree.isBalanced()`, () => {
  expect(secondBinarySearchTree.isBalanced()).toEqual(true);
});

secondBinarySearchTree.insert(7);

test(`secondBinarySearchTree.insert(7) => secondBinarySearchTree.isBalanced()`, () => {
  expect(secondBinarySearchTree.isBalanced()).toEqual(false);
});
