const assertEqual = function(actual, expected) {
  //if values match it should print console log with Assertion Passed
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} ===${expected}`);
  // if it does not match will print assertion failed
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !==${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"