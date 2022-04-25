/**
 * @typedef {Object} BinaryTree
 * @property {number} value - The value of the current node
 * @property {BinaryTree | null} left - The value of the current node
 * @property {BinaryTree | null} right - The value of the current node
 */
/**
 * Given a binary tree and an array traverse in post-order and fulfill the array with the values of the traversed nodes.
 *
 * @param {BinaryTree} tree - The tree instance that must be traversed.
 * @param {number[]} array - The array to fill with the traversed values.
 *
 * @return {number[]} traversal - A reference to the original array fulfilled with the traverse values
 */
function postOrderTraverse(tree, array) {
  _internalPostOrderTraverse(tree, array);
  return array;
}

/**
 * Internally traverse the tree in order
 *
 * @param {BinaryTree} tree - The tree instance that must be traversed.
 * @param {number[]} array - The array to fill with the traversed values.
 * @private
 */
function _internalPostOrderTraverse(tree, array) {
  if (tree.left) {
    _internalPostOrderTraverse(tree.left, array);
  }
  if (tree.right) {
    _internalPostOrderTraverse(tree.right, array);
  }
  array.push(tree.value)
}


module.exports = {postOrderTraverse}