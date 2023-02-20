// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //if values match it should print console log with Assertion Passed
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} ===${expected}`);
  // if it does not match will print assertion failed
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !==${expected}`);
  }
};



// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
