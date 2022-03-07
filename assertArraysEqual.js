

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {

  return eqArrays(arr1, arr2) ?
    `😀😀😀 Assertion Passed: ${arr1} === ${arr2}` :
    `😭😭😭 Assertion Failed: ${arr1} !== ${arr2}`;

};


module.exports = assertArraysEqual;
