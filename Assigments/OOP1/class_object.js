//a class that has class/static properties and methods
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isEngineRunning = false;
  }

  static numberOfWheels = 4;

  startEngine() {
    this.isEngineRunning = true;
    console.log(
      `The ${this.year} ${this.make} ${this.model}'s engine is now running.`
    );
  }

  static getNumberOfWheels() {
    console.log(`A car has ${Car.numberOfWheels} wheels.`);
  }
}

// Instantiate an object
const myCar = new Car("Toyota", "Camry", 2022);

// to access the instance property and method
console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}.`);
myCar.startEngine();

console.log(`All cars have ${Car.numberOfWheels} wheels.`);
Car.getNumberOfWheels();
