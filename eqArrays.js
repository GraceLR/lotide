
const eqArrays = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {

    return false;

  }

  if (typeof arr1 !== 'object') {

    return arr1 === arr2;

  } else {

    let cond = true;

    arr1.forEach((ele, i) => {
      cond = cond && eqArrays(ele, arr2[i]);
    });

    return cond;

  }
};

module.exports = eqArrays;




