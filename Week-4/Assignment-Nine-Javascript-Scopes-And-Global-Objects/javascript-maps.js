function calcWordFrequencies() {
  const words = prompt("Enter words as per your choice");
  let obj = {};

  words.split(" ").forEach((val) => {
    if (obj[val]) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
  });

  console.log(obj);
}

calcWordFrequencies();

