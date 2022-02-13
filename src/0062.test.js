const BinarySearchTree = require("./0062");

const binarySearchTreeDFSPreOreder = new BinarySearchTree();
binarySearchTreeDFSPreOreder
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

test(`binarySearchTreeDFSPreOreder.depthFirstSearchPreOrder()`, () => {
  expect(binarySearchTreeDFSPreOreder.depthFirstSearchPreOrder()).toEqual([
    15, 10, 1, 5, 12, 20, 50,
  ]);
});

const binarySearchTreeDFSInOrder = new BinarySearchTree();
binarySearchTreeDFSInOrder
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

test(`binarySearchTreeDFSInOrder.depthFirstSearchInOrder()`, () => {
  expect(binarySearchTreeDFSInOrder.depthFirstSearchInOrder()).toEqual([
    1, 5, 10, 12, 15, 20, 50,
  ]);
});

const binarySearchTreeDFSPostOrder = new BinarySearchTree();
binarySearchTreeDFSPostOrder
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

test(`binarySearchTreeDFSPostOrder.depthFirstSearchPostOrder()`, () => {
  expect(binarySearchTreeDFSPostOrder.depthFirstSearchPostOrder()).toEqual([
    5, 1, 12, 10, 50, 20, 15,
  ]);
});
