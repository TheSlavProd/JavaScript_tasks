const numArr = [1, 2, 3, 4, 9, 7, 8, 5, 621, 12];
let count = 0;

function findItem(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(findItem(numArr, 621));
console.log("количество операции = " + count);
