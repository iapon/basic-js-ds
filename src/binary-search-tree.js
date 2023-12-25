const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
    this.minVal = null;
    this.maxVal = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    function appendNode(cur, value) {
      if (cur === null) return new Node(value);
      if (cur.data === value) {
        return cur;
      }
      cur.data > value
        ? (cur.left = appendNode(cur.left, value))
        : (cur.right = appendNode(cur.right, value));
      return cur;
    }
    this.rootNode = appendNode(this.rootNode, data);
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    function deepFind(cur, value) {
      if (cur === null) return null;
      if (cur.data === value) return cur;
      if (cur.data > value) return deepFind(cur.left, value);
      return deepFind(cur.right, value);
    }
    return deepFind(this.rootNode, data);
  }

  remove(data) {
    function removeNode(inputNode, value) {
      let cur = inputNode;
      if (cur === null) return null;
      if (cur.data > value) {
        cur.left = removeNode(cur.left, value);
        return cur;
      }
      if (cur.data < value) {
        cur.right = removeNode(cur.right, value);
        return cur;
      }
      if (cur.left === null && cur.right === null) {
        cur = null;
        return cur;
      }
      if (cur.left === null) {
        cur = cur.right;
        return cur;
      }
      if (cur.right === null) {
        cur = cur.left;
        return cur;
      }
      let temporary = cur.left;
      while (temporary.right) {
        temporary = temporary.right;
      }
      cur.data = temporary.data;
      cur.left = removeNode(cur.left, temporary.data);
      return cur;
    }
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (this.rootNode === null) return null;
    let cur = this.rootNode;
    while (cur.left) {
      cur = cur.left;
    }
    return cur.data;
  }

  max() {
    if (this.rootNode === null) return null;
    let cur = this.rootNode;
    while (cur.right) {
      cur = cur.right;
    }
    return cur.data;
  }
}

module.exports = {
  BinarySearchTree,
};
