const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


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