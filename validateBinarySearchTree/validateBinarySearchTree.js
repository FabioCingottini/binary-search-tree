/**
 * @typedef {Object} BinaryTree
 * @property {number} value - The value of the current node
 * @property {BinaryTree | null} left - The value of the current node
 * @property {BinaryTree | null} right - The value of the current node
 */
/**
 * Given a binary tree returns a boolean representing whether it's a binary search tree
 *
 * @param {BinaryTree | null} tree - The tree to validate.
 *
 * @return {boolean} isValidBinarySearchTree - Whether the tree is a valid binary search tree.
 */
function validateBinarySearchTree(tree) {

  return _internalValidateBinarySearchTree(tree, -Infinity, Infinity);
}

/**
 * Given a binary tree a min value and a max value returns a boolean representing whether it's a binary search tree
 *
 * @param {BinaryTree} tree - The tree to validate.
 * @param {number} minValue - The minValue that could be found in the given tree
 * @param {number} maxValue - The maxValue that could be found in the given tree
 *
 * @return {boolean} isValidBinarySearchTree - Whether the tree is a valid binary search tree.
 */
function _internalValidateBinarySearchTree(tree, minValue, maxValue) {
  if (!tree) return true;
  const isThisValid = tree.value >= minValue && tree.value < maxValue;
  const isLeftValid = !tree.left || _internalValidateBinarySearchTree(tree.left, minValue, tree.value);
  const isRightValid = !tree.right || _internalValidateBinarySearchTree(tree.right, tree.value, maxValue);
  return isThisValid && isLeftValid && isRightValid
}

module.exports = {validateBinarySearchTree}