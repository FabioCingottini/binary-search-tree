const {createBinarySearchTreeWithHeightMinimized} = require("./createBinarySearchTreeWithHeightMinimized");

describe('Test createBinarySearchTreeWithHeightMinimized', function () {
  // util fn
  const createTree = (value, left = null, right = null) => ({value, left, right});

  it("Should output a proper tree with height minimized for even length arr", () => {
    // arrange
    const nodes = [1, 2, 5, 7];
    const expectedTree = createTree(
      5,
      createTree(
        2,
        createTree(1),
      ),
      createTree(7),
    );

    // act
    const tree = createBinarySearchTreeWithHeightMinimized(nodes);
    const rawTree = JSON.parse(JSON.stringify(tree));

    // assert
    expect(rawTree).toEqual(expectedTree);
  });

  it("Should output a proper tree with height minimized for odd length arr", () => {
    // arrange
    const nodes = [1, 2, 5, 7, 10];
    const expectedTree = createTree(
      5,
      createTree(
        2,
        createTree(1),
      ),
      createTree(
        10,
        createTree(7),
      ),
    );

    // act
    const tree = createBinarySearchTreeWithHeightMinimized(nodes);
    const rawTree = JSON.parse(JSON.stringify(tree));

    // assert
    expect(rawTree).toEqual(expectedTree);
  });

  it("Should output a proper tree with height minimized for long even length arr", () => {
// arrange
    const nodes = [1, 2, 5, 7, 10, 13, 14, 15];
    const expectedTree = createTree(
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
        14,
        createTree(13),
        createTree(15),
      ),
    );

    // act
    const tree = createBinarySearchTreeWithHeightMinimized(nodes);
    const rawTree = JSON.parse(JSON.stringify(tree));

    // assert
    expect(rawTree).toEqual(expectedTree);
  });

  it("Should output a proper tree with height minimized for long odd length arr", () => {
    // arrange
    const nodes = [1, 2, 5, 7, 10, 13, 14, 15, 22];
    const expectedTree = createTree(
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
    const tree = createBinarySearchTreeWithHeightMinimized(nodes);
    const rawTree = JSON.parse(JSON.stringify(tree));

    // assert
    expect(rawTree).toEqual(expectedTree);
  });
});