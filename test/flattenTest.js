
const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

const data1 = [1, 2, [5, -2]];
console.log(assertArraysEqual(flatten(data1), [1, 2, 5, -2]));

const data2 = [1, 2, [3, 4], 5, [6]];
console.log(assertArraysEqual(flatten(data2), [1, 2, 3, 4, 5, 6]));
