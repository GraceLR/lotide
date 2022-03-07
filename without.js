
const without = function(arr, wot) {

  let obj = {};

  wot.forEach(ele => {
    obj[ele] = typeof ele;
  });

  let newArr = [];

  arr.forEach(ele => {
    
    if (obj[ele] === undefined || obj[ele] !== typeof ele) {
      newArr.push(ele);
    }

  });

  return newArr;
};

module.exports = without;

console.log(without(["1", "2", "3"], []));