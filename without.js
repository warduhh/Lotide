const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const without = function(source, itemsToRemove) {
const result = []
  for (let i = 0; i < source.length; i++) {{
  if (!itemsToRemove.some(item => item === source[i])) { 
        result.push(source[i]);
      }
    }
  }
  return result;
};

assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

module.exports = without;