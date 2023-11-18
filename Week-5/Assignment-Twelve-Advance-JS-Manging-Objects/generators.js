function* stringToSymbolIterator(strings) {
  for (const str of strings) {
    yield Symbol(str);
  }
}

const inputArray = ["hello", "world", "test"];
const iterator = stringToSymbolIterator(inputArray);

for (const symbol of iterator) {
  console.log(symbol);
}
