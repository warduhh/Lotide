const assertEqual = function(actual, expected) {
  //if values match it should print console log with Assertion Passed
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} ===${expected}`);
  // if it does not match will print assertion failed
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !==${expected}`);
  }
};



const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log("Arrays not equal length")
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      // if it is an array && the arrays are not equal then return false;
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      // if the element is not an array and the items are not equal then return false
      return false;
    }
  } 
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]])  
    results[sentence[i]] = [i]
    else
     results[sentence[i]].push(i);
   }
   return results;
  };

const result = letterPositions("hello");
assertEqual(result["h"], [0]);
assertEqual(result["e"], [1]);
assertEqual(result["l"], [2, 3]);
assertEqual(result["o"], [4]);

module.exports = letterPositions ;