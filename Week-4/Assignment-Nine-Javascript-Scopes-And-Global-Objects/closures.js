function closure() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const firstCounter = closure();
const secondCounter = closure();

let firstValues = [],
  secondValues = [];

let i = 0,
  j = 0;

// Calling firstCounter function 5 times
while (i < 5) {
  firstValues.push(firstCounter());
  i++;
}

// Calling secondCounter function 3 times
while (j < 3) {
  secondValues.push(secondCounter());
  j++;
}

console.log(firstValues, secondValues);
