
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns e for ['a', 'e']", () => {
    assert.deepEqual(tail(['a', 'e']), ['e']);
  });

  it("returns f for ['a', 'e', 'f]", () => {
    assert.deepEqual(tail(['a', 'e', 'f']), ['e', 'f']);
  });

  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), undefined);
  });

});