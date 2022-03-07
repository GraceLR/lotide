
const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]));
