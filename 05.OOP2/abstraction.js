//base class
class Mammal {
  constructor() {
    if (this.constructor === Mammal) {
      throw new Error("Mammal cannot be called or instantiate");
    }
  }
}

class Human extends Mammal {
  run() {
    console.log("This can run");
  }
}

const john = new Human();
john.run();
