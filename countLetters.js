//const assertEqual = require('./assertEqual');
const countLetters =function(string){
const countLetters = {};
string.split(''). forEach (letter => {
countLetters[letter] = countLetters[letter] ? (countLetters[letter] +1): 1;
});
return countLetters;
}

/*const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["e"], 3); */

module.exports = countLetters ;