const BinarySearchTree = require("./0063");

const binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

test(`binarySearchTree.breadthFirstSearch()`, () => {
  expect(binarySearchTree.breadthFirstSearch()).toEqual([
    15, 10, 20, 1, 12, 50, 5,
  ]);
});
