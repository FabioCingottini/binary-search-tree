# Binary search tree

- [Description](#description)
- [API](#api)
- [Usage](#usage)
    - [Creating a BST](#creating-a-bst)
    - [Inserting a value](#inserting-a-value)
    - [Check if a value is contained](#check-if-a-value-is-contained)
    - [Remove a value](#remove-a-value)

## Description

This npm repository export a class `BinarySearchTree` useful for performing common operation on a binary search tree.

## API
| Method                          | Description                                                                                                     |  
|---------------------------------|-----------------------------------------------------------------------------------------------------------------|
| `constructor(value: number)`    | Given a `value` of type `number`, create a single node BST                                                      |
| `insert(value: number): bool`   | Given a `value` of type `number`, insert that value into the BST, return whether the insertion was successful   |
| `contains(value: number): bool` | Given a `value` of type `number`, return whether the value is contained in the BST                              |
| `remove(value: number): bool`   | Given a `value` of type `number`, remove value from the BST, return whether the insertion was successful or not |

| Property                            | Description                                                                                                 |  
|-------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `left: Nullable<BinarySearchTrue>`  | The left instance of `BinarySearchTree` added using the method `insert(value: number): bool`                |`
| `right: Nullable<BinarySearchTrue>` | The right instance of `BinarySearchTree` added using the method `insert(value: number): bool`               |
| `value: number`                     | The value of the current node, specified by the constructor or by the method `insert(value: number): bool`  |


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

