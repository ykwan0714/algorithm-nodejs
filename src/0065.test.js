const BinarySearchTree = require("./0065");

/**
 * https://www.udemy.com/course/best-javascript-data-structures/learn/quiz/5338921#overview
 * 문제에 대한 풀이 테스트 케이스가 따로 없는 것으로 보인다.
 */

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
secondBinarySearchTree.insert(15);
secondBinarySearchTree.insert(20);
secondBinarySearchTree.insert(10);
secondBinarySearchTree.insert(12);

test(`secondBinarySearchTree.root.value`, () => {
  expect(secondBinarySearchTree.root.value).toEqual(15);
});

test(`secondBinarySearchTree.root.right.value`, () => {
  expect(secondBinarySearchTree.root.right.value).toEqual(20);
});

test(`secondBinarySearchTree.root.left.right.value`, () => {
  expect(secondBinarySearchTree.root.left.right.value).toEqual(12);
});
