class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    return `voom!!!`;
  }
}

const Ford = new Vehicle("Ford");
const mercedes = new Vehicle("mercedes");
