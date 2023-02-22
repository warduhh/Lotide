const assertEqual = function(actual, expected) {
  //if values match it should print console log with Assertion Passed
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} ===${expected}`);
  // if it does not match will print assertion failed
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !==${expected}`);
  }
};


const countLetters =function(string){
const countLetters = {};
string.split(''). forEach (letter => {
countLetters[letter] = countLetters[letter] ? (countLetters[letter] +1): 1;
});
return countLetters;
}


const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["e"], 3);

module.exports = countLetters ;