
const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {

  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  let cond = true;

  if (key1.length !== key2.length) {

    return false;

  } else {

    for (let key in obj1) {

      if (typeof obj1[key] !== 'object') {
        cond = cond && (eqArrays(obj1[key], obj2[key]));
      } else {
        cond = cond && eqObjects(obj1[key], obj2[key]);
      }
    }
  }

  return cond;

};

module.exports = eqObjects;