/**
 * @property {number} value
 * @property {BinarySearchTree | null} left
 * @property {BinarySearchTree | null} right
 */
class BinarySearchTree {
  /**
   * Given a value, initialize a single node BST with that value.
   *
   * @param {number} value - The root value of the single leaf BST that is going to be created.
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Given a value, insert it in the BST and return a boolean representing whether has been inserted.
   *
   * @param {number} value - The number value to insert in the BST.
   *
   * @returns {boolean} hasBeenInserted - Whether the node has been inserted.
   */
  insert(value) {
    let current = this;
    while (current !== null) {
      switch (true) {
        case value >= current.value && current.right === null:
          current.right = new BinarySearchTree(value);
          return true;
        case value < current.value && current.left === null:
          current.left = new BinarySearchTree(value);
          return true;
        case value >= current.value:
          current = current.right
          break;
        case value < current.value:
          current = current.left
          break;
      }
    }
    return false;
  }

  /**
   * Given a value, return whether it is contained in the BST.
   *
   * @param {number} value - The value to check if it is container in the BST.
   *
   * @returns {boolean} isContained - Whether the given value is contained in the BST.
   */
  contains(value) {
    let current = this;
    while (current !== null) {
      switch (true) {
        case value === current.value:
          return true;
        case value >= current.value:
          current = current.right
          break;
        case value < current.value:
          current = current.left
          break;
      }
    }
    return false;
  }


  /**
   * Given a value, remove it from the BST and return a boolean representing whether the node has been removed.
   *
   * @param {number} value - The value to remove from the BST.
   *
   * @returns {boolean} hasBeenRemoved - Whether the node has been removed from the BST.
   */
  remove(value) {
    let current = this;
    let previous = null;
    while (current !== null) {
      switch (true) {
        case value === current.value: {
          // manage the node deletion
          switch (true) {
            // node hasn't successors
            case current.left === null && current.right === null:
              if (previous.left && previous.left.value === current.value) {
                previous.left = null;
              } else if (previous.right && previous.right.value === current.value) {
                previous.right = null;
              }
              return true;
            // node has only left successor
            case current.left !== null && current.right === null:
              if (previous.left && previous.left.value === current.value) {
                previous.left = current.left;
              } else if (previous.right && previous.right.value === current.value) {
                previous.right = current.left;
              }
              return true;
            // node has only right successor
            case current.left === null && current.right !== null:
              if (previous.left && previous.left.value === current.value) {
                previous.left = current.right;
              } else if (previous.right && previous.right.value === current.value) {
                previous.right = current.right;
              }
              return true;
            // node has both successors
            case current.left !== null && current.right !== null:
              // pick the littlest from the right tree
              let subTreeCurrent = current.right;
              let subTreePrevious = current;
              while (subTreeCurrent.left !== null) {
                subTreePrevious = subTreeCurrent
                subTreeCurrent = subTreeCurrent.left
              }
              // attach the current followings to the littlest
              subTreeCurrent.left = current.left;
              subTreeCurrent.right = current.right;
              // attach null to the subtree previous
              subTreePrevious.left = null;
              // attach the littlest to the previous
              if (previous.left && previous.left.value === current.value) {
                previous.left = subTreeCurrent;
              } else if (previous.right && previous.right.value === current.value) {
                previous.right = subTreeCurrent;
              }
              return true;
          }
          break;
        }
        case value >= current.value:
          previous = current;
          current = current.right
          break;
        case value < current.value:
          previous = current;
          current = current.left
          break;
      }
    }
    return false;
  }
}

module.exports = {BinarySearchTree}