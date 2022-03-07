
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
console.log(assertArraysEqual(['a', 'b'], ['a', 'b']));
console.log(assertArraysEqual(['a', 'b'], ['c', 'b']));
console.log(assertArraysEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertArraysEqual(1, 1));