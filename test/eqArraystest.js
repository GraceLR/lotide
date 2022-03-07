
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
});