const assert = require('assert');

function capitalizeFirstLetters(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      output += input[0].toUpperCase();
    } else {
      output += input[i];
    }
  }
  return output;
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

assert.strictEqual(capitalizeFirstLetters('chaîne avec plusieurs mots'), 'Chaîne avec plusieurs mots')