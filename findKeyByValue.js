
const findKeyByValue = (obj, val) => {

  let arr = Object.keys(obj);
  let result = undefined;

  arr.forEach(ele => {
    if (val === obj[ele]) {
      result = ele;
    }
  });
    
  return result;

};

module.exports = findKeyByValue;