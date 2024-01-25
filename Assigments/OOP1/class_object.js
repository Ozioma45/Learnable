class Car {
  // Instance property
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isEngineRunning = false;
  }

  // Static property
  static numberOfWheels = 4;

  // Instance method
  startEngine() {
    this.isEngineRunning = true;
    console.log(
      `The ${this.year} ${this.make} ${this.model}'s engine is now running.`
    );
  }

  // Static method
  static getNumberOfWheels() {
    console.log(`A car has ${Car.numberOfWheels} wheels.`);
  }
}

// Instantiate an object
const myCar = new Car("Toyota", "Camry", 2022);

// to access the instance property and method
console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}.`);
myCar.startEngine();

// to access the static property and method
console.log(`All cars have ${Car.numberOfWheels} wheels.`);
Car.getNumberOfWheels();
