const {validateBinarySearchTree} = require("./validateBinarySearchTree");

describe("Test validateBinarySearchTree.js", () => {
  // in the following examples BinarySearchTree class won't be used in
  // order to avoid false-positives/negatives in case of errors on that class
  const createTree = (value, left = null, right = null) => ({value, left, right});

  it('Should return true in case of null tree', function () {
    // act
    const isValid = validateBinarySearchTree(null);

    // assert
    expect(isValid).toBeTruthy();
  });

  it("Should return true in case of a single node tree", () => {
    // arrange
    const tree = createTree(50);

    // act
    const isValid = validateBinarySearchTree(tree);

    // assert
    expect(isValid).toBeTruthy()
  });

  it("Should return true in case of left-branched tree", () => {
    // arrange
    const tree = createTree(50,
      createTree(4,
        createTree(3)
      )
    );

    // act
    const isValid = validateBinarySearchTree(tree);

    // assert
    expect(isValid).toBeTruthy()
  });

  it("Should return true in case of right-branched tree", () => {
    // arrange
    const tree = createTree(50,
      null,
      createTree(96,
        null,
        createTree(1000)
      )
    );

    // act
    const isValid = validateBinarySearchTree(tree);

    // assert
    expect(isValid).toBeTruthy()
  });

  it("Should return true in case of both-branched tree", () => {
    // arrange
    const tree = createTree(50,
      createTree(40,
        createTree(10),
        createTree(45)
      ),
      createTree(96,
        createTree(66),
        createTree(1000)
      )
    );

    // act
    const isValid = validateBinarySearchTree(tree);

    // assert
    expect(isValid).toBeTruthy()
  });

  it("Should return true in case of complex tree", () => {
    // arrange
    const tree = createTree(50,
      createTree(
        4,
        createTree(3),
        createTree(
          6,
          null,
          createTree(
            20,
            null,
            createTree(
              37,
              createTree(26),
              createTree(49),
            )
          )
        )
      ),
      createTree(
        96,
        createTree(
          85,
          createTree(
            55,
            null,
            createTree(58),
            ),
          createTree(86),
        ),
      )
    );


    // act
    const isValid = validateBinarySearchTree(tree);

    // assert
    expect(isValid).toBeTruthy()
  });

  it("Should return false in case of left-branched tree", () => {
    // arrange
    const tree = createTree(50,
      createTree(4,
        createTree(3,
          createTree(3,
            createTree(3),
          ),
        )
      )
    );

    // act
    const isValid = validateBinarySearchTree(tree);

    // assert
    expect(isValid).toBeFalsy()
  });

  it("Should return false in case of right-branched tree", () => {
    // arrange
    const tree = createTree(
      50,
      null,
      createTree(
        44,
        null,
        createTree(
          33,
          null,
          createTree(
            9,
            null,
            1000000
          ),
        ),
      ),
    );

    // act
    const isValid = validateBinarySearchTree(tree);

    // assert
    expect(isValid).toBeFalsy();
  });

  it("Should return false in case of both-branched tree", () => {
    // arrange
    const tree = createTree(50,
      createTree(40,
        createTree(48),
        createTree(3)
      ),
      createTree(96,
        createTree(66),
        createTree(1000)
      )
    );

    // act
    const isValid = validateBinarySearchTree(tree);

    // assert
    expect(isValid).toBeFalsy();
  });

  it("Should return false in case of complex tree", () => {
    // arrange
    const tree = createTree(50,
      createTree(
        4,
        createTree(3),
        createTree(
          6,
          null,
          createTree(
            20,
            null,
            createTree(
              37,
              createTree(26),
              createTree(49),
            )
          )
        )
      ),
      createTree(
        96,
        createTree(
          1000000,
          createTree(
            55,
            null,
            createTree(58),
          ),
          createTree(86),
        ),
      )
    );

    // act
    const isValid = validateBinarySearchTree(tree);

    // assert
    expect(isValid).toBeFalsy();
  });

});

