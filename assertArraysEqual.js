const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertArraysEqual;