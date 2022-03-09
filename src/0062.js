class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  depthFirstSearchPreOrder() {
    const visited = []
    const current = this.root
    const traverse = (node) => {
      visited.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current) // traverse(tree.root)
    return visited
  }
  depthFirstSearchInOrder() {
    const visited = []
    const current = this.root
    const traverse = (node) => {
      if (node.left) traverse(node.left)
      visited.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(current) // traverse(tree.root)
    return visited
  }

  depthFirstSearchPostOrder() {
    const visited = []
    const current = this.root
    const traverse = (node) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visited.push(node.value)
    }
    traverse(current) // traverse(tree.root)
    return visited
  }
}

module.exports = BinarySearchTree;
