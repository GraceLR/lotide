
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

console.log(assertArraysEqual(without([1, 2, '3'], ['1', '2', '3', '4']), [1, 2]));
console.log(assertArraysEqual(without([], ['1', '2', '3', '4']), []));
