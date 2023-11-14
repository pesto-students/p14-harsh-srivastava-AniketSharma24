// Inheritance Example
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCarCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

// Polymorphism Example
class Shape {
  calculateArea() {
    // To be overridden by subclasses
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Creating instances
const rectangle = new Rectangle(4, 5);
const triangle = new Triangle(3, 6);
const circle = new Circle(7);

// Calling calculateArea() and logging results
console.log("Rectangle Area:", rectangle.calculateArea());
console.log("Triangle Area:", triangle.calculateArea());
console.log("Circle Area:", circle.calculateArea());

// Abstraction and Encapsulation Example:
class BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  getBalance() {
    return this.#balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance - amount >= 0) {
      this.#balance -= amount;
    } else {
      console.log("Withdrawal failed. Insufficient funds.");
    }
  }
}

// Creating instances
const checkingAcc = new CheckingAccount("C123", 1000, "John Doe");
const savingsAcc = new SavingsAccount("S456", 2000, "Jane Doe");

// Performing operations and logging results
checkingAcc.deposit(500);
checkingAcc.withdraw(200);
console.log("Checking Account Balance:", checkingAcc.getBalance());

savingsAcc.deposit(1000);
savingsAcc.withdraw(500);
console.log("Savings Account Balance:", savingsAcc.getBalance());
