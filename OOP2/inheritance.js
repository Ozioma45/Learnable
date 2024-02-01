//define a parent

class Mammal {
  constructor(hasHair) {
    this.hasHair = hasHair;
  }
  numberOfEyes = 2;

  eat() {
    console.log("i am eating");
  }
}

const mammal = new Mammal();

mammal.eat();

class Human extends Mammal {
  constructor() {
    super(hasHair);
  }
  numberOfLegs = 2;
}

const human = new Human();

human.eat();

class bird extends Mammal {
  hasFeather = true;
}

const dove = new bird();

console.log(dove.hasFeather);
dove.eat();
