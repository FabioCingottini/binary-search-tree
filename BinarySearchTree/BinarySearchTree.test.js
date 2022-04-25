const {BinarySearchTree} = require("./BinarySearchTree");

describe("Test class BinarySearchTree", () => {
  it("Should return a single node BST with proper value when constructor is called", () => {
    // arrange
    // act
    const bst1 = new BinarySearchTree(10);
    const bst2 = new BinarySearchTree(13);
    const bst3 = new BinarySearchTree(40);

    // assert
    // bst1
    expect(bst1).toHaveProperty("value", 10);
    expect(bst1).toHaveProperty("left", null);
    expect(bst1).toHaveProperty("right", null);
    // bst2
    expect(bst2).toHaveProperty("value", 13);
    expect(bst2).toHaveProperty("left", null);
    expect(bst2).toHaveProperty("right", null);
    // bst3
    expect(bst3).toHaveProperty("value", 40);
    expect(bst3).toHaveProperty("left", null);
    expect(bst3).toHaveProperty("right", null);

  });

  it("Should insert node in the proper places when insert is called", () => {
    // arrange
    const bst = new BinarySearchTree(10);

    // act
    bst.insert(15);
    bst.insert(5);
    bst.insert(5);
    bst.insert(2);
    bst.insert(1);
    bst.insert(22);
    bst.insert(13);
    bst.insert(14);

    // assert
    // bst should be:
    //            10
    //        /        \
    //       5          15
    //     /  \       /   \
    //    2    5    13     22
    //  /             \
    // 1               14
    expect(bst).toHaveProperty("right.value", 15);
    expect(bst).toHaveProperty("right.right.value", 22);
    expect(bst).toHaveProperty("right.right.right", null);
    expect(bst).toHaveProperty("right.right.left", null);
    expect(bst).toHaveProperty("right.left.value", 13);
    expect(bst).toHaveProperty("right.left.right.value", 14);
    expect(bst).toHaveProperty("right.left.left", null);
    expect(bst).toHaveProperty("left.value", 5);
    expect(bst).toHaveProperty("left.left.value", 2);
    expect(bst).toHaveProperty("left.left.right", null);
    expect(bst).toHaveProperty("left.right.value", 5);
    expect(bst).toHaveProperty("left.right.right", null);
    expect(bst).toHaveProperty("left.right.left", null);
    expect(bst).toHaveProperty("left.left.left.value", 1);
    expect(bst).toHaveProperty("left.left.left.right", null);
    expect(bst).toHaveProperty("left.left.left.left", null);
  });

  it("Should return proper value when contains is called", () => {
    // arrange
    const bst = new BinarySearchTree(10);
    bst.insert(15);
    bst.insert(5);
    bst.insert(5);
    bst.insert(2);
    bst.insert(1);
    bst.insert(22);
    bst.insert(13);
    bst.insert(14);
    // bst should be:
    //            10
    //        /        \
    //       5          15
    //     /  \       /   \
    //    2    5    13     22
    //  /             \
    // 1               14

    // act
    const doesContain15 = bst.contains(15);
    const doesContain5 = bst.contains(5);
    const doesContain2 = bst.contains(2);
    const doesContain1 = bst.contains(1);
    const doesContain22 = bst.contains(22);
    const doesContain13 = bst.contains(13);
    const doesContain14 = bst.contains(14);
    const doesContain100 = bst.contains(100);
    const doesContain101 = bst.contains(101);
    const doesContain0 = bst.contains(0);
    const doesContain17 = bst.contains(17);
    const doesContain11 = bst.contains(11);
    const doesContain7 = bst.contains(7);

    // assert
    expect(doesContain15).toBeTruthy();
    expect(doesContain5).toBeTruthy();
    expect(doesContain2).toBeTruthy();
    expect(doesContain1).toBeTruthy();
    expect(doesContain22).toBeTruthy();
    expect(doesContain13).toBeTruthy();
    expect(doesContain14).toBeTruthy();
    expect(doesContain100).toBeFalsy();
    expect(doesContain101).toBeFalsy();
    expect(doesContain0).toBeFalsy();
    expect(doesContain17).toBeFalsy();
    expect(doesContain11).toBeFalsy();
    expect(doesContain7).toBeFalsy();
  });

  it("Should modify the BST in the proper way when remove is called on root node", () => {
    // arrange
    const bst = new BinarySearchTree(17);
    bst.insert(70);
    bst.insert(98);
    bst.insert(56);
    bst.insert(13);
    bst.insert(16);
    bst.insert(10);

    // in this example the act and arrange would be coupled for best assertion on the deletion
    // FIRST REMOVAL
    // act
    bst.remove(17);
    // assert
    // bst should be from:     to:
    //         17                      56
    //      /      \                /     \
    //    13        70            13       70
    //   /  \     /   \          /  \        \
    // 10    16  56    98      10    16       98
    expect(bst).toHaveProperty("value", 56);

    // SECOND REMOVAL
    // act
    bst.remove(56);
    // assert
    // bst should be from:     to:
    //         56                      70
    //      /     \                 /     \
    //    13       70             13       98
    //   /  \        \           /  \
    // 10    16       98       10    16
    expect(bst).toHaveProperty("value", 70);

    // THIRD REMOVAL
    // act
    bst.remove(70);
    // assert
    // bst should be from:     to:
    //         70                      98
    //      /     \                  /
    //    13       98              13
    //   /  \                     /  \
    // 10    16                 10    16
    expect(bst).toHaveProperty("value", 98);

    // FOURTH REMOVAL
    // act
    bst.remove(98);
    // assert
    // bst should be from:     to:
    //        98                  13
    //      /                    /  \
    //    13                   10    16
    //   /  \
    // 10    16
    expect(bst).toHaveProperty("value", 13);






  })

  it("Should modify the BST in the proper way when remove is called on a leaf node", () => {
    // arrange
    const bst = new BinarySearchTree(10);
    bst.insert(5);
    bst.insert(6);
    bst.insert(2);
    bst.insert(1);

    // in this example the act and arrange would be coupled for best assertion on the deletion

    // FIRST REMOVAL
    // act
    bst.remove(1);
    // assert
    // bst should from:         to:
    //         10                        10
    //        /                         /
    //       5                         5
    //     /  \                      /  \
    //    2    6                    2    6
    //  /
    // 1
    expect(bst).toHaveProperty("left.left.left", null);

    // SECOND REMOVAL
    // act
    bst.remove(6);
    // assert
    // bst should from:         to:
    //      10                        10
    //     /                         /
    //    5                         5
    //  /  \                      /
    // 2    6                    2
    expect(bst).toHaveProperty("left.right", null);

    // THIRD REMOVAL
    // act
    bst.remove(2);
    // assert
    // bst should from:         to:
    //      10                        10
    //     /                         /
    //    5                         5
    //  /
    // 2
    expect(bst).toHaveProperty("left.left", null);

    // FOURTH REMOVAL
    // act
    bst.remove(5);
    // assert
    // bst should from:         to:
    //      10                  10
    //     /
    //    5
    expect(bst).toHaveProperty("left", null);
  });

  it("Should modify the BST in the proper way when remove is called on a node with just one between left or right", () => {
    // arrange
    const bst = new BinarySearchTree(10);
    bst.insert(5);
    bst.insert(6);
    bst.insert(7);
    bst.insert(8);
    bst.insert(4);
    bst.insert(3);
    bst.insert(1);

    // in this example the act and arrange would be coupled for best assertion on the deletion

    // FIRST REMOVAL
    // act
    bst.remove(7);
    // assert
    // bst should from:         to:
    //              10                      10
    //             /                       /
    //            5                       5
    //          /  \                    /  \
    //         4    6                  4    6
    //       /       \               /       \
    //      3         7             3         8
    //    /            \          /
    //   1              8        1
    expect(bst).toHaveProperty("left.right.right.value", 8);

    // SECOND REMOVAL
    // act
    bst.remove(4);
    // assert
    // bst should from:         to:
    //             10                      10
    //            /                       /
    //           5                       5
    //         /  \                    /  \
    //        4    6                  3    6
    //      /       \               /       \
    //     3         8             1         8
    //   /
    //  1
    expect(bst).toHaveProperty("left.left.value", 3);

    // THIRD REMOVAL
    // act
    bst.remove(6);
    // assert
    // bst should from:         to:
    //             10                      10
    //            /                       /
    //           5                       5
    //         /  \                    /  \
    //        3    6                  3    8
    //      /       \               /
    //     1         8             1
    expect(bst).toHaveProperty("left.right.value", 8);

    // FOURTH REMOVAL
    // act
    bst.remove(3);
    // assert
    // bst should from:         to:
    //             10                      10
    //            /                       /
    //           5                       5
    //         /  \                    /  \
    //        3    6                  1    8
    //      /
    //     1
    expect(bst).toHaveProperty("left.left.value", 1);
  });

  it("Should modify the BST in the proper way when remove is called on a node with both left and right", () => {
    // arrange
    const bst = new BinarySearchTree(17);
    bst.insert(70);
    bst.insert(98);
    bst.insert(99);
    bst.insert(66);
    bst.insert(77);
    bst.insert(8);
    bst.insert(10);
    bst.insert(11);
    bst.insert(9);
    bst.insert(5);
    bst.insert(3);
    bst.insert(2);
    bst.insert(4);

    // in this example the act and arrange would be coupled for best assertion on the deletion
    // FIRST REMOVAL
    // act
    bst.remove(8);
    // assert
    // bst should from:                   to:
    //                17                              17
    //             /      \                        /      \
    //            8        70                     9        70
    //          /  \     /   \                  /  \     /   \
    //         5    10  66    98               5    10  66    98
    //       /    /  \      /  \             /       \      /  \
    //      3    9    11   77   99          3         11   77   99
    //    /  \                            /  \
    //   2    4                          2    4
    expect(bst).toHaveProperty("left.value", 9);

    // SECOND REMOVAL
    // act
    bst.remove(70);
    // assert
    // bst should from:              to:
    //              17                            17
    //           /      \                      /      \
    //          9        70                   9        77
    //        /  \     /   \                /  \     /   \
    //       5    10  66    98             5    10  66    98
    //     /       \      /  \           /       \         \
    //    3         11   77   99        3         11       99
    //  /  \                          /  \
    // 2    4                        2    4
    expect(bst).toHaveProperty("right.value", 77);

    // THIRD REMOVAL
    // act
    bst.remove(77);
    // assert
    // bst should from:              to:
    //              17                            17
    //           /      \                      /      \
    //          9        77                   9        98
    //        /  \     /   \                /  \     /   \
    //       5    10  66    98             5    10  66    99
    //     /       \         \           /       \
    //    3         11       99         3         11
    //  /  \                          /  \
    // 2    4                        2    4
    expect(bst).toHaveProperty("right.value", 98);

    // FOURTH REMOVAL
    // act
    bst.remove(9);
    // assert
    // bst should from:              to:
    //              17                            17
    //           /      \                      /      \
    //          9        98                  10        98
    //        /  \     /   \                /  \     /   \
    //       5    10  66    99             5    11  66    99
    //     /       \                     /
    //    3         11                  3
    //  /  \                          /  \
    // 2    4                        2    4
    expect(bst).toHaveProperty("left.value", 10);
  });
})