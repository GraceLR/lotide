
const countLetters = (str) => {

  let obj = {};

  str.split("").forEach(ele => {

    if (obj[ele] === undefined) {
      obj[ele] = 1;
    } else {
      obj[ele] += 1;
    }
        
  });

  return obj;

};

module.exports = countLetters;