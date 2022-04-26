# Binary search tree

- [Description](#description)
- [API](#api)
- [Usage](#usage)
    - [Creating a BST](#creating-a-bst)
    - [Inserting a value](#inserting-a-value)
    - [Check if a value is contained](#check-if-a-value-is-contained)
    - [Remove a value](#remove-a-value)
    - [Validating a tree](#validating-a-tree)
    - [Traversing a tree](#traversing-a-tree)
    - [Creating tree with minimized height](#creating-tree-with-minimized-height)
    - [Finding the kth biggest number in a tree](#finding-the-kth-biggest-number-in-a-tree)

## Description

This npm repository exports:

- A class `BinarySearchTree` useful for performing common operations on a binary search tree.
- A function `validateBinarySearchTree` for validating a tree as a valid binary search tree.
- A function `inOrderTraverse` for traversing a binary search tree in in-order.
- A function `preOrderTraverse` for traversing a binary search tree in pre-order.
- A function `postOrderTraverse` for traversing a binary search tree in post-order.
- A function `createBinarySearchTreeWithHeightMinimized` for creating a bst with the height minimized.
- A function `findKthLargestValue` for searching the kth biggest number in the tree.

## API

| Method                                                                         | Description                                                                                                                                                                       |  
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `BinarySearchTree.constructor(value: number)`                                  | Given a `value` of type `number`, create a single node BST                                                                                                                        |
| `BinarySearchTree.insert(value: number): bool`                                 | Given a `value` of type `number`, insert that value into the BST, return whether the insertion was successful                                                                     |
| `BinarySearchTree.contains(value: number): bool`                               | Given a `value` of type `number`, return whether the value is contained in the BST                                                                                                |
| `BinarySearchTree.remove(value: number): bool`                                 | Given a `value` of type `number`, remove value from the BST, return whether the insertion was successful or not                                                                   |
| `validateBinarySearchTree(tree: BinarySearchTree): bool`                       | Given a `tree` object with `value: number`, `left: BinarySearchTree` and `right: BinarySearchTree` return a boolean representing whether the tree is a correct binary search tree |
| `inOrderTraverse(tree: BinarySearchTree, array: number[]): number[]`           | Given a `tree` object with `value: number`, `left: BinarySearchTree` and `array: number[]` return an array of numbers represening the traversed nodes in in-order                 |
| `preOrderTraverse(tree: BinarySearchTree, array: number[]): number[]`          | Given a `tree` object with `value: number`, `left: BinarySearchTree` and `array: number[]` return an array of numbers represening the traversed nodes in pre-order                |
| `postOrderTraverse(tree: BinarySearchTree, array: number[]): number[]`         | Given a `tree` object with `value: number`, `left: BinarySearchTree` and `array: number[]` return an array of numbers represening the traversed nodes in post-order               |
| `createBinarySearchTreeWithHeightMinimized(array: number[]): BinarySearchTree` | Given a sorted `array: Array<number>` returns a balanced tree with the minimum possible height.                                                                                   |
| `findKthLargestValue(tree: BinarySearchTree, k: number)`                       | Given a `tree` object with `value: number`, `left: BinarySearchTree` and a `k: number` return the kth biggest value in the three                                                  |

| Property                                             | Description                                                                                                 |  
|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `BinarySearchTree.left: Nullable<BinarySearchTrue>`  | The left instance of `BinarySearchTree` added using the method `insert(value: number): bool`                |`
| `BinarySearchTree.right: Nullable<BinarySearchTrue>` | The right instance of `BinarySearchTree` added using the method `insert(value: number): bool`               |
| `BinarySearchTree.value: number`                     | The value of the current node, specified by the constructor or by the method `insert(value: number): bool`  |

## Usage

#### Creating a BST

```javascript
const {BinarySearchTree} = require("./binary-search-tree");

const bst = new BinarySearchTree(17);
// The BST created is a single node graph with 17 as value
```

#### Inserting a value

```javascript
const {BinarySearchTree} = require("./binary-search-tree");

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

// The BST could be represented by the following draw
//               17          
//            /      \       
//           8        70     
//         /  \     /   \    
//        5    10  66    98  
//      /    /  \      /  \  
//     3    9    11   77   99
//   /  \                    
//  2    4
```

#### Check if a value is contained

```javascript
const {BinarySearchTree} = require("./binary-search-tree");

// let's repeat what was done in the previous example
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

// The BST could be represented by the following draw
//               17          
//            /      \       
//           8        70     
//         /  \     /   \    
//        5    10  66    98  
//      /    /  \      /  \  
//     3    9    11   77   99
//   /  \                    
//  2    4

bst.contains(70); // true
bst.contains(98); // true
bst.contains(99); // true

bst.contains(109); // false
bst.contains(10002); // false
bst.contains(-1); // false
```

#### Remove a value

```javascript
const {BinarySearchTree} = require("./binary-search-tree");

// let's repeat what was done in the previous example
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

// The BST could be represented by the following draw
//               17          
//            /      \       
//           8        70     
//         /  \     /   \    
//        5    10  66    98  
//      /    /  \      /  \  
//     3    9    11   77   99
//   /  \                    
//  2    4

bst.remove(8);

//               17
//            /      \
//           9        70
//         /  \     /   \
//        5    10  66    98
//      /       \      /  \
//     3         11   77   99
//   /  \
//  2    4

bst.remove(70);

//               17
//            /      \
//           9        77
//         /  \     /   \
//        5    10  66    98
//      /       \         \
//     3         11       99
//   /  \
//  2    4
```

#### Validating a tree

```javascript

const {BinarySearchTree, validateBinarySearchTree} = require("./binary-search-tree");

const validBst = new BinarySearchTree(17);
validBst.insert(70);
validBst.insert(98);
validBst.insert(66);
validBst.insert(8);
validBst.insert(10);
validBst.insert(5);

// The BST could be represented by the following draw
//               17          
//            /      \       
//           8        70     
//         /  \     /   \    
//        5    10  66    98

const isValid1 = validateBinarySearchTree(validBst)
console.log(isValid1) // true

// now let's try with an invalid one 

const invalidBST = {
  value: 50,
  left: {
    value: 88,
    left: {
      value: 3,
      left: {
        value: 3,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    value: 55,
    left: null,
    right: null,
  },
};

// The invalid BST could be represented by the following draw
//                 50          
//              /     \         
//            88       55      
//           /           
//         3
//       /
//      3      
//    /      
//   3      

const isValid2 = validateBinarySearchTree(invalidBst)
console.log(isValid2) // false
```

#### Traversing a tree

```javascript
const {
  BinarySearchTree,
  inOrderTraverse,
  preOrderTraverse,
  postOrderTraverse,
} = require("./binary-search-tree");

const bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(15);
bst.insert(22);

// the BST could be representing by the following draw
//               10          
//            /      \       
//           5        15     
//         /  \        \    
//       2     5       22
//     /
//   1 

const inOrderTraversal = inOrderTraverse(bst, []);
const preOrderTraversal = preOrderTraverse(bst, []);
const postOrderTraversal = postOrderTraverse(bst, []);

console.log(inOrderTraversal); // [1, 2, 5, 5, 10, 15, 22]
console.log(preOrderTraversal); // [10, 5, 2, 1, 5, 15, 22]
console.log(postOrderTraversal); // [1, 2, 5, 5, 22, 15, 10]

```

#### Creating tree with minimized height

```javascript
const {createBinarySearchTreeWithHeightMinimized} = require("./binary-search-tree");

const nodes = [1, 7, 2, 5, 10, 15, 13, 14].sort((a, b) => a - b); // it's important the node are sorted 
const bst = createBinarySearchTreeWithHeightMinimized(nodes);

// then the var bst could be represented by the following draw
//               10          
//            /      \       
//           5        14     
//         /  \     /    \    
//       2     7   13    15
//     /
//   1
```

#### Finding the kth biggest number in a tree
```javascript
const {BinarySearchTree, findKthLargestValue} = require("./binary-search-tree");

const bst = new BinarySearchTree(13);
bst.insert(15);
bst.insert(5);
bst.insert(14);
bst.insert(7);
bst.insert(10);
bst.insert(2);
bst.insert(1);
// then the var bst could be represented by the following draw
//               13          
//            /      \       
//           5        15     
//         /  \        \    
//       2     7        14
//     /        \
//   1          10

const kthLargestNumber = findKthLargestValue(tree, 3)
console.log(kthLargestNumber); // 13
```
