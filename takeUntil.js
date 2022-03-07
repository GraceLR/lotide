
const takeUntil = (array, callback) => {

  let result = [];

  for (let i = 0; i < array.length; i++) {

    const ele = array[i];

    if (!callback(ele)) {
      result.push(ele);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;
