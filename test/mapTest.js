
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const data1 = [1, 2, 5, -2];
console.log(assertArraysEqual(map(data1, x => x * 2), [2, 4, 10, -4]));

const data2 = [{ key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }];
console.log(assertArraysEqual(map(data2, x => x.value * 2), [20, 40, 60]));

const data3 = [1, 2, 5, -2];
console.log(assertArraysEqual(map(data3, x => x ** 2), [1, 4, 25, 4]));
