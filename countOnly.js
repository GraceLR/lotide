
const countOnly = (allItems, itemsToCount) => {

  let result = {};

  allItems.forEach((item) => {

    if (itemsToCount[item] !== undefined && itemsToCount[item]) {

      result[item] = (result[item] === undefined ?
        1 : result[item] + 1);

    }

  });

  return result;

};

module.exports = countOnly;