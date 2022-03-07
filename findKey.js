
const findKey = (obj, callback) => {

  let keys = Object.keys(obj);
  let resuilt = undefined;

  for (let i = 0; i < keys.length; i++) {
    if (callback(obj[keys[i]])) {
      resuilt = keys[i];
      break;
    }
  }

  return resuilt;
  
};

module.exports = findKey;