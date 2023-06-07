const arr = [1, 2, 9, 66, 66, 5, 7];

function getThirdElementFromNumbersArray(arr) {
  const isNumber = arr.every((elem) => typeof elem === "number");
  if (!isNumber) {
    return "Array items bad";
  }
  const newArr = [...new Set(arr)];
  newArr.sort((a, b) => a - b);
  console.log(newArr);
  return newArr[newArr.length - 3];
}

console.log(getThirdElementFromNumbersArray(arr));
