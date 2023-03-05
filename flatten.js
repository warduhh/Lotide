const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

function flatten(arr) {
  let flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArr.push(...arr[i]);
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
}


assertArraysEqual(flatten(1, 2, 3) , [5, 6, 7]);
assertArraysEqual(flatten(1, 2, 3) , [1, 2, 3]);

module.exports = flatten ;