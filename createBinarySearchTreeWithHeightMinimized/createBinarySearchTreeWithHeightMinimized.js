const {BinarySearchTree} = require("../BinarySearchTree");

/**
 * Given a sorted array of number return a binary search tree with the minimum possible height.
 *
 * @param {Array<number>} arr - The sorted array of number representing the values of the nodes of the tree that needs to be created.
 *
 * @return {BinarySearchTree} minHeightTree - The BinarySearchTree instance with the minimum possible height
 */
function createBinarySearchTreeWithHeightMinimized(arr) {
  return _internalCreateBinarySearchTreeWithHeightMinimized(arr);
}

function _internalCreateBinarySearchTreeWithHeightMinimized(arr, bst = null) {
  const start = arr.slice(0, Math.floor(arr.length / 2));
  const root = arr[Math.floor(arr.length / 2)];
  const end = arr.slice(Math.floor(arr.length / 2) + 1);
  const tree = bst ? bst.insert(root) : new BinarySearchTree(root);
  if (start.length) {
    _internalCreateBinarySearchTreeWithHeightMinimized(start, tree)
  }
  if (end.length) {
    _internalCreateBinarySearchTreeWithHeightMinimized(end, tree)
  }
  return tree;
}

module.exports = {createBinarySearchTreeWithHeightMinimized};
