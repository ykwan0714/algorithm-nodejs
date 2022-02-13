const BinarySearchTree = require("./0064");

const firstBinarySearchTree = new BinarySearchTree();
firstBinarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

firstBinarySearchTree.remove(50);

test(`firstBinarySearchTree.root.right.value after firstBinarySearchTree.remove(50)`, () => {
  expect(firstBinarySearchTree.root.right.value).toEqual(20);
});

test(`firstBinarySearchTree.root.right.right after firstBinarySearchTree.remove(50)`, () => {
  expect(firstBinarySearchTree.root.right.right).toEqual(null);
});

firstBinarySearchTree.remove(5);

test(`firstBinarySearchTree.root.left.left.value after firstBinarySearchTree.remove(5)`, () => {
  expect(firstBinarySearchTree.root.left.left.value).toEqual(1);
});

test(`firstBinarySearchTree.root.left.left.right after firstBinarySearchTree.remove(5)`, () => {
  expect(firstBinarySearchTree.root.left.left.right).toEqual(null);
});

const secondBinarySearchTree = new BinarySearchTree();
secondBinarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

secondBinarySearchTree.remove(1);

test(`secondBinarySearchTree.root.left.left.value after secondBinarySearchTree.remove(1)`, () => {
  expect(secondBinarySearchTree.root.left.left.value).toEqual(5);
});

test(`secondBinarySearchTree.root.left.left.left after secondBinarySearchTree.remove(1)`, () => {
  expect(secondBinarySearchTree.root.left.left.left).toEqual(null);
});

test(`secondBinarySearchTree.root.left.left.right after secondBinarySearchTree.remove(1)`, () => {
  expect(secondBinarySearchTree.root.left.left.right).toEqual(null);
});

secondBinarySearchTree.remove(20);

test(`secondBinarySearchTree.root.right.value after secondBinarySearchTree.remove(20)`, () => {
  expect(secondBinarySearchTree.root.right.value).toEqual(50);
});

test(`secondBinarySearchTree.root.right.right after secondBinarySearchTree.remove(20)`, () => {
  expect(secondBinarySearchTree.root.right.right).toEqual(null);
});

test(`secondBinarySearchTree.root.right.left after secondBinarySearchTree.remove(20)`, () => {
  expect(secondBinarySearchTree.root.right.left).toEqual(null);
});

const thirdBinarySearchTree = new BinarySearchTree();
thirdBinarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50)
  .insert(60)
  .insert(30)
  .insert(25)
  .insert(23)
  .insert(24)
  .insert(70);

thirdBinarySearchTree.remove(10);

test(`thirdBinarySearchTree.root.left.value after thirdBinarySearchTree.remove(10)`, () => {
  expect(thirdBinarySearchTree.root.left.value).toEqual(12);
});

test(`thirdBinarySearchTree.root.left.left.value after thirdBinarySearchTree.remove(10)`, () => {
  expect(thirdBinarySearchTree.root.left.left.value).toEqual(1);
});

test(`thirdBinarySearchTree.root.left.left.right.value after thirdBinarySearchTree.remove(10)`, () => {
  expect(thirdBinarySearchTree.root.left.left.right.value).toEqual(5);
});

thirdBinarySearchTree.remove(50);

test(`thirdBinarySearchTree.root.right.value after thirdBinarySearchTree.remove(50)`, () => {
  expect(thirdBinarySearchTree.root.right.value).toEqual(20);
});

test(`thirdBinarySearchTree.root.right.right.value after thirdBinarySearchTree.remove(50)`, () => {
  expect(thirdBinarySearchTree.root.right.right.value).toEqual(60);
});

test(`thirdBinarySearchTree.root.right.right.left.value after thirdBinarySearchTree.remove(50)`, () => {
  expect(thirdBinarySearchTree.root.right.right.left.value).toEqual(30);
});

const fourthBinarySearchTree = new BinarySearchTree();
fourthBinarySearchTree
  .insert(22)
  .insert(49)
  .insert(85)
  .insert(66)
  .insert(95)
  .insert(90)
  .insert(100)
  .insert(88)
  .insert(93)
  .insert(89);

fourthBinarySearchTree.remove(85);

test(`fourthBinarySearchTree.root.right.right.value after fourthBinarySearchTree.remove(85)`, () => {
  expect(fourthBinarySearchTree.root.right.right.value).toEqual(88);
});

test(`fourthBinarySearchTree.root.right.right.right.left.left.value after fourthBinarySearchTree.remove(85)`, () => {
  expect(fourthBinarySearchTree.root.right.right.right.left.left.value).toEqual(
    89
  );
});
