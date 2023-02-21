const assertArraysEqual = require('../assertArraysEqual');

const middle = require('../middle');

// TEST CODE
//For arrays with one or two elements, there is no middle. Return an empty array.
//middle([1]) // => []
//middle([1, 2]) // => []
assertArraysEqual(middle([1]), 1,2);
//For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
assertArraysEqual(middle([1,2,3]), 1,2,3,4,5);