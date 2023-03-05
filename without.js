const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

let without = function (source, itemsToRemove) {
  let removeMe = [];

  for (let a = 0, b = 0; a < source.length; a++, b++) {
    if (source[a] === itemsToRemove[b]) {
      continue;
    } else {
      removeMe.push(source[a]);
    }
  }
  console.log(removeMe);
};


/*
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => passed

module.exports = without; 
*/
