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
   * Given a value, insert it in the BST and return the instance on which the method was executed.
   *
   * @param {number} value - The number value to insert in the BST.
   *
   * @returns {BinarySearchTree} this - The instance on which the method was executed.
   */
  insert(value) {
    // if the value I'm trying to insert is lower or equal, go to the right, left otherwise
    if (this.value <= value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
    return this;
  }

  /**
   * Given a value, return whether it is contained in the BST.
   *
   * @param {number} value - The value to check if it is container in the BST.
   *
   * @returns {boolean} isContained - Whether the given value is contained in the BST.
   */
  contains(value) {
    if (this.value === value) {
      return true;
    } else if (this.value < value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    }
  }


  /**
   * Given a value, remove it from the BST and return the instance on which the method was executed.
   *
   * @param {number} value - The value to remove from the BST.
   * @param {BinarySearchTree | null} parent - This method uses recursion, therefore  when called internally it passes additional infos.
   *
   * @returns {BinarySearchTree} this - The instance on which the method was executed.
   */
  remove(value, parent = null) {
    if (this.value < value) {
      if (this.right) { // right could be null in case of a non-existent value
        this.right.remove(value, this);
      }
    } else if (this.value > value) {
      if (this.left) { // left could be null in case of a non-existent value
        this.left.remove(value, this);
      }
    } else { // in this case the value is the same
      // no parent need to be managed differently
      // no left and no right means this is a single node
      if (this.left && this.right) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (!parent) {
        if (!this.left && this.right) {
          // copy the node and modify the pointers of the current nodes to point to the child successor(s)
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else if (this.left && !this.right) {
          // copy the node and modify the pointers of the current nodes to point to the child successor(s)
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (!this.left && !this.right) {
          // no parent, no left and no right means this is a single node
          return this; // just for not leaving this if empty
        }
      } else if (parent.right === this) { // has the right one but not the left one
        parent.right = this.left ? this.left : this.right;
      } else if (parent.left === this) { // has the left one but not the right one
        parent.left = this.left ? this.left : this.right;
      }
    }
    return this;
  }

  getMinValue() {
    // min value will always be at left
    if (this.left) {
      return this.left.getMinValue();
    } else {
      return this.value;
    }
  }
}

module.exports = {BinarySearchTree}