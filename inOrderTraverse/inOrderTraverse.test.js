const {inOrderTraverse} = require("./inOrderTraverse");

describe("Test inOrderTraverse", () => {
  // examples in this file won't use the BinarySearchTree class for avoiding
  // false positives/negatives in case of error on that class
  it('Should return an array with nodes value in-order', function () {
    // arrange
    const createTree = (value, left = null, right = null) => ({value, left, right});
    const tree1 = createTree(
      10,
      createTree(
        5,
        createTree(
          2,
          createTree(1)
        ),
        createTree(5)
      ),
      createTree(
        15,
        null,
        createTree(22)
      )
    )
    const expectedTraversal = [1, 2, 5, 5, 10, 15, 22];

    // act
    const traversal = inOrderTraverse(tree1, [])

    // assert
    expect(traversal.length).toEqual(expectedTraversal.length);
    for(let i = 0; i < traversal.length; i++) {
      expect(traversal[i]).toEqual(expectedTraversal[i]);
    }
  });
});