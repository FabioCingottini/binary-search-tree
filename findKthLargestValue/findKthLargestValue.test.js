const {findKthLargestValue} = require("./findKthLargestValue");

// util fn
const createTree = (value, left = null, right = null) => ({value, left, right});

describe('Test findKthLargestValue', () => {
  it('Should find the kth largest value from the given array', () => {
    // arrange
    const tree1 = createTree(
      13,
      createTree(
        5,
        createTree(
          2,
          createTree(1)
        ),
        createTree(
          7,
          null,
          createTree(10)
        )
      ),
      createTree(
        15,
        createTree(14)
      ),
    )
    const tree2 = createTree(
      10,
      createTree(
        5,
        createTree(
          2,
          createTree(1),
        ),
        createTree(7),
      ),
      createTree(
        15,
        createTree(
          14,
          createTree(13),
        ),
        createTree(22),
      ),
    );

    // act
    const largestNum1 = findKthLargestValue(tree1, 3);
    const largestNum2 = findKthLargestValue(tree2, 2);

    // assert
    expect(largestNum1).toBe(13);
    expect(largestNum2).toBe(15);
  });
});