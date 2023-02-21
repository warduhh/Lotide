const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  //if values match it should print console log with Assertion Passed
  if (eqArrays(actual, expected)) {
    return console.log(`✅✅✅Assertion Passed: ${actual} ===${expected}`);
  // if it does not match will print assertion failed
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !==${expected}`);
  }
};

module.exports = assertArraysEqual