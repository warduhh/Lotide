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

const head = function(array) {
  console.log("test", array);
  return array[0] 
  
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");