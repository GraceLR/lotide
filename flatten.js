
const flatten = array => {

  let newArr = [];
  
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      array[i].forEach(ele => {
        newArr.push(ele);
      });
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

module.exports = flatten;