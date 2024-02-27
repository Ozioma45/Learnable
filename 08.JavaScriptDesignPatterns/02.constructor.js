/* Constructor Pattern: This pattern involves creating objects with predefined properties and methods 
using a constructor function. It's like a blueprint for making similar objects. */

class Car {
  constructor(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }
}

//we can create new instances of the car
let civic = new Car("Honda Civic", 2009, 20000);
let mondeo = new Car("Ford Mondeo", 2010, 5000);
