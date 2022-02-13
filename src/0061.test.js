const BinarySearchTree = require("./0061");

const firstBinarySearchTree = new BinarySearchTree();
firstBinarySearchTree.insert(15).insert(20).insert(10).insert(12);
const firstFoundNode = firstBinarySearchTree.find(20);

test(`firstFoundNode.value`, () => {
  expect(firstFoundNode.value).toEqual(20);
});

test(`firstBinarySearchTree.root.right.value`, () => {
  expect(firstFoundNode.left).toEqual(null);
});

test(`firstFoundNode.right`, () => {
  expect(firstFoundNode.right).toEqual(null);
});

const secondBinarySearchTree = new BinarySearchTree();
secondBinarySearchTree.insert(15).insert(20).insert(10).insert(12);
const secondFoundNode = secondBinarySearchTree.find(120);

test(`secondBinarySearchTree.find(120)`, () => {
  expect(secondFoundNode).toEqual(undefined);
});
