
const findKey = (obj, callback) => {

  let keys = Object.keys(obj);
  let result = undefined;

  for (let i = 0; i < keys.length; i++) {
    if (callback(obj[keys[i]])) {
      result = keys[i];
      break;
    }
  }

  return result;
  
};

module.exports = findKey;