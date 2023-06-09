const numbers = [1, 3, 4, 5, 9, 6, 4, 1, 4];

function getObjectsFromNumbersArray(numbersArray) {
  const countObject = numbersArray.reduce((init, el) => {
    init[el] = (init[el] || 0) + 1;
    return init;
  }, {});
  const objectEntries = Object.entries(countObject);
  const result = [];
  for (let i = 0; i < objectEntries.length; i++) {
    result.push({
      key: +objectEntries[i][0],
      count: objectEntries[i][1],
    });
  }
  return result;
}

console.log(getObjectsFromNumbersArray(numbers));
