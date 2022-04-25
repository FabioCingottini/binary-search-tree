const {postOrderTraverse} = require("./postOrderTraverse");

describe("Test postOrderTraverse", () => {
  // examples in this file won't use the BinarySearchTree class for avoiding
  // false positives/negatives in case of error on that class
  it('Should return an array with nodes value in post-order', function () {
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
    const expectedTraversal = [1, 2, 5, 5, 22, 15, 10];

    // act
    const traversal = postOrderTraverse(tree1, [])

    // assert
    expect(traversal.length).toEqual(expectedTraversal.length);
    for (let i = 0; i < traversal.length; i++) {
      expect(traversal[i]).toEqual(expectedTraversal[i]);
    }
  });
});