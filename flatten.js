const assertArraysEqual = function(actual, expected) {
  //if values match it should print console log with Assertion Passed
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅Assertion Passed: ${actual} ===${expected}`);
  // if it does not match will print assertion failed
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !==${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      return false;
    }
  } 
  return true;
};

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