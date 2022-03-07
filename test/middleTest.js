
const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {

  it("returns 5 for [1,3,5,7,9]", () => {
    assert.deepEqual(middle([1,3,5,7,9]), [5]);
  });

  it("returns [5,7] for [1,3,5,7,9,10]", () => {
    assert.deepEqual(middle([1,3,5,7,9,10]), [5,7]);
  });

  it("returns [] for [1,3]", () => {
    assert.deepEqual(middle([1,3]), []);
  });

});