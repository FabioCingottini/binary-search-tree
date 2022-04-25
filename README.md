# Binary search tree

- [Description](#description)
- [API](#api)
- [Usage](#usage)
    - [Creating a BST](#creating-a-bst)
    - [Inserting a value](#inserting-a-value)
    - [Check if a value is contained](#check-if-a-value-is-contained)
    - [Remove a value](#remove-a-value)
    - [Validating a tree](#validating-a-tree)

## Description

This npm repository export a class `BinarySearchTree` useful for performing common operations on a binary search tree
and a function `validateBinarySearchTree` for validating a tree as a valid binary search tree.

## API

| Method                                                   | Description                                                                                                                                                                       |  
|----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `BinarySearchTree.constructor(value: number)`            | Given a `value` of type `number`, create a single node BST                                                                                                                        |
| `BinarySearchTree.insert(value: number): bool`           | Given a `value` of type `number`, insert that value into the BST, return whether the insertion was successful                                                                     |
| `BinarySearchTree.contains(value: number): bool`         | Given a `value` of type `number`, return whether the value is contained in the BST                                                                                                |
| `BinarySearchTree.remove(value: number): bool`           | Given a `value` of type `number`, remove value from the BST, return whether the insertion was successful or not                                                                   |
| `validateBinarySearchTree(tree: BinarySearchTree): bool` | Given a `tree` object with `value: number`, `left: BinarySearchTree` and `right: BinarySearchTree` return a boolean representing whether the tree is a correct binary search tree |

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

const {BinarySearchTree} = require("./binary-search-tree");
const {validateBinarySearchTree} = require("./binary-search-tree");

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
