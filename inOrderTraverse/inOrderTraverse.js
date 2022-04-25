/**
 * @typedef {Object} BinaryTree
 * @property {number} value - The value of the current node
 * @property {BinaryTree | null} left - The value of the current node
 * @property {BinaryTree | null} right - The value of the current node
 */
/**
 * Given a binary tree and an array traverse in-order and fulfill the array with the values of the traversed nodes.
 *
 * @param {BinaryTree} tree - The tree instance that must be traversed.
 * @param {number[]} array - The array to fill with the traversed values.
 *
 * @return {number[]} traversal - A reference to the original array fulfilled with the traverse values
 */
function inOrderTraverse(tree, array) {
  _internalInOrderTraverse(tree, array);
  return array;
}

/**
 * Internally traverse the tree in order
 *
 * @param {BinaryTree} tree - The tree instance that must be traversed.
 * @param {number[]} array - The array to fill with the traversed values.
 * @private
 */
function _internalInOrderTraverse(tree, array) {
  if (tree.left) {
    _internalInOrderTraverse(tree.left, array);
  }
  array.push(tree.value)
  if (tree.right) {
    _internalInOrderTraverse(tree.right, array);
  }
}


module.exports = {inOrderTraverse}