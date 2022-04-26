/**
 * Given a BinarySearchTree instance and a number k, return the kth largest value contained in the tree.
 *
 * @param {BinarySearchTree} tree - An instance of BinarySearchTree where the kth largest value need to be searched.
 * @param {number} k - A number representing, given a sorted array of tree nodes, the kth largest value in that array.
 *
 * @return {number} kthLargestValue - The kth largest value from the given tree
 */
function findKthLargestValue(tree, k) {
  let ref = {num: 0, i: 0};
  _internalReverseOrderTraverse(tree, k, ref);
  return ref.num;
}

/**
 * @typedef {Object} Ref
 * @property {number} num - The current chosen value
 * @property {number} i - A number representing the numbers of parsed nodes
 */
/**
 * Given a BinarySearchTree instance, a number k and a ref obj, parse recursively the tree and use the ref obj to save the
 * kth largest number and to exit the recursion.
 *
 * @param {BinarySearchTree} tree - An instance of BinarySearchTree where the kth largest value need to be searched.
 * @param {number} k - A number representing, given a sorted array of tree nodes, the kth largest value in that array.
 * @param {Ref} ref - A ref object used to hack the pass-by-value/reference of javascript.
 * @private
 */
function _internalReverseOrderTraverse(tree, k, ref) {
  if (tree.right && k > ref.i) {
    _internalReverseOrderTraverse(tree.right, k, ref);
  }
  if (ref.i === k) {
    return;
  } else {
    ref.num = tree.value;
    ref.i++
  }
  if (tree.left && k > ref.i) {
    _internalReverseOrderTraverse(tree.left, k, ref);
  }
}

module.exports = {findKthLargestValue};