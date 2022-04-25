const {preOrderTraverse} = require("./preOrderTraverse");

describe("Test preOrderTraverse", () => {
  it('Should return an array with nodes value in pre-order', function () {
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
    const expectedTraversal = [10, 5, 2, 1, 5, 15, 22];

    // act
    const traversal = preOrderTraverse(tree1, [])

    // assert
    expect(traversal.length).toEqual(expectedTraversal.length);
    for(let i = 0; i < traversal.length; i++) {
      expect(traversal[i]).toEqual(expectedTraversal[i]);
    }
  });
});