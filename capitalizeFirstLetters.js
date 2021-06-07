const assert = require('assert');

function capitalizeFirstLetters(input) {
  const output = input.split(' ').map(firstLetters => firstLetters.charAt(0).toUpperCase() + firstLetters.substring(1));
  return output.join(' ');
}



// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD')