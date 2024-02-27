/* Prototype Pattern: Instead of creating new instances of objects from scratch, 
you can clone existing instances (prototypes) and modify them as needed. 
It's like making copies of a drawing and then adding details to each copy. */

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
