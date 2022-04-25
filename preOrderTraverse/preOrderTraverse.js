/**
 * @typedef {Object} BinaryTree
 * @property {number} value - The value of the current node
 * @property {BinaryTree | null} left - The value of the current node
 * @property {BinaryTree | null} right - The value of the current node
 */
/**
 * Given a binary tree and an array traverse in pre-order and fulfill the array with the values of the traversed nodes.
 *
 * @param {BinaryTree} tree - The tree instance that must be traversed.
 * @param {number[]} array - The array to fill with the traversed values.
 *
 * @return {number[]} traversal - A reference to the original array fulfilled with the traverse values
 */
function preOrderTraverse(tree, array) {
  array.push(tree.value);
  if (tree.left) {
    preOrderTraverse(tree.left, array);
  }
  if (tree.right) {
    preOrderTraverse(tree.right, array);
  }
  return array;
}

module.exports = {preOrderTraverse}