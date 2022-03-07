
const tail = input => {

  const len = input.length;

  if (len === 0) {
    return undefined;
  }

  return input.slice(1);

};

module.exports = tail;
