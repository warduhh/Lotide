const assert = require('chai').assert;
const tail   = require('../tail');

it("returns 3 length of the original array", () => {
  const words = ["Hello", "Lighthouse", "Labs"];
  tail(words);
  assert.strictEqual(words.length, 3);
});

it("returns 2 the length of the return array", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"])
  assert.strictEqual(result.length, 2); 
});


it("returns first element is Lighthouse", () => {
  const result = tail(["Lighthouse"])
  assert.strictEqual(result.length, 0); 
});



