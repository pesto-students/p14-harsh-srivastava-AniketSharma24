class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return num * num;
  }
  cube(num) {
    return num * num * num;
  }
  power(pow, num) {
    return num ** pow;
  }
}

const scientificCalculator = new ScientificCalculator();

console.log(Calculator.prototype.add.call(scientificCalculator, 10, 5));
console.log(Calculator.prototype.subtract.apply(scientificCalculator, [10, 5]));

const multiplyByTwo = Calculator.prototype.multiply.bind(scientificCalculator, 2);
const powerOfThree = scientificCalculator.power.bind(scientificCalculator, 3);

console.log(multiplyByTwo(8))
console.log(powerOfThree(4))
