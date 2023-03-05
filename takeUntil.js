const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
};

module.exports = takeUntil;
// Testing:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // output: [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // output: [ "I've", 'been', 'to', 'Hollywood' ]

console.log('---');

assertArraysEqual((results1.length), (data1.length)); // returns True because 'length' is only 1 value long
assertArraysEqual(results1, data1); // returns False because arrays are not the same
