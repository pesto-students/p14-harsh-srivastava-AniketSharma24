// Protecting the Object:
const person = {
  _name: "John Doe",
  _age: undefined,
  _email: "john.doe@example.com",

  // Read-only properties
  get name() {
    return this._name;
  },

  get email() {
    return this._email;
  },

  // Write-only property
  set age(value) {
    this._age = value;
  },

  // Method to get the age
  getAge() {
    return this._age;
  },

  // Method to set the age
  setAge(newAge) {
    this._age = newAge;
  },
};

// Use Object.defineProperty to make name and email read-only
Object.defineProperty(person, "name", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: person._name,
});

Object.defineProperty(person, "email", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: person._email,
});

// Example usage:
console.log("Name:", person.name); // Read-only
console.log("Email:", person.email); // Read-only

person.age = 25; // Write-only
console.log("Age:", person.getAge()); // Using the getAge method

person.setAge(30); // Using the setAge method
console.log("Updated Age:", person.getAge());

// Javascript Prototype:
// Creating a JavaScript object called Vehicle
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Adding a method called getDetails to the prototype
Vehicle.prototype.getDetails = function () {
  return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

// Creating a subclass called Car that extends Vehicle
function Car(make, model, year, numDoors) {
  // Call the parent constructor using super
  Vehicle.call(this, make, model, year);

  // Additional property for Car
  this.numDoors = numDoors;
}

// Inheriting from Vehicle using prototype
Car.prototype = Object.create(Vehicle.prototype);

// Override the getDetails method in Car
Car.prototype.getDetails = function () {
  return `${Vehicle.prototype.getDetails.call(this)}, Number of Doors: ${
    this.numDoors
  }`;
};

// Creating an instance of Vehicle and an instance of Car
const vehicleInstance = new Vehicle("Toyota", "Camry", 2022);
const carInstance = new Car("Honda", "Accord", 2022, 4);

// Calling the getDetails() method on each instance and logging the result
console.log("Vehicle Details:", vehicleInstance.getDetails());
console.log("Car Details:", carInstance.getDetails());
