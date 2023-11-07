function divideArray(arr) {
  const evenNums = [],
    oddNums = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNums.push(arr[i]);
    } else {
      oddNums.push(arr[i]);
    }
  }

  console.log("Even numbers: ", evenNums.length ? evenNums.sort() : "None");
  console.log("Odd numbers: ", oddNums.length ? oddNums.sort() : "None");
}

let nums = [4, 2, 9, 1, 8];
divideArray(nums);
