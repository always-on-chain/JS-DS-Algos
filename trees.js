
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    let newNode = new Node(key);
    const insertNode = (node, newNode) => {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }

    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }
  search(key) {
    const searchNode = (node, key) => {
      if (node === null) {
        return false;
      }
      if (key < node.key) {
        return searchNode(node.left, key);
      } else if (key > node.key) {
        return searchNode(node.right, key);
      } else {
        return true;
      }
    }
    return searchNode(this.root, key);
  }
  inOrderTraverse(callback) {
    const inOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback);
        callback(node.key);
        inOrderTraverseNode(node.right, callback);
      }
    }
    inOrderTraverseNode(this.root, callback);
  }
  preOrderTraverse(callback) {
    const preOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
     }
    preOrderTraverseNode(this.root, callback);
  }
  postOrderTraverse(callback) {
    const postOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    }
    postOrderTraverseNode(this.root, callback);
  }
  min() {
    const minNode = (node) => {
      if (node) {
        while (node && node.left) {
          node = node.left;
        }
        return node.key;
      }
      return null;
    }
    return minNode(this.root);
  }
  max() {
    const maxNode = (node) => {
      if (node) {
        while (node && node.right) {
          node = node.right;
        }
        return node.key
      }
      return null;
    }
    return maxNode(this.root);
  }
  remove(key) {
    const removeNode = (node, key) => {
      const findMinNode = (node) => {
        while (node && node.left) {
          node = node.left;
        }
        return node;
      }

      if (node === null) {
        return null;
      }
      if (key < node.key) {
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.key) {
        node.right = removeNode(node.right, key);
        return node;
      } else { //key is equal to node key
        //case 1 - a leaf node
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        //case 2 - a node with only 1 child
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        //case 3 - a node with 2 children
        let aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node;
      }
    }
    this.root = removeNode(this.root, key);
  }
  printNode(value) {
    console.log(value);
  }
}

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
// tree.remove(7);
tree.inOrderTraverse(tree.printNode)
