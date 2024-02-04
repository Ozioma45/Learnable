// Base class for Animal
class animalKingdom {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  //For Abstraction, to display the basic information
  displayInfo() {
    console.log(`Name: ${this.name}, Type: ${this.type}`);
  }
}

// subclass for animals without backbone
class WithoutBackbone extends animalKingdom {
  constructor(name, type, subclass) {
    super(name, type);
    this.subclass = subclass;
  }

  //For Polymorphism, to Override displayInfo method
  displayInfo() {
    console.log(
      `Name: ${this.name}, Type: ${this.type}, Subclass: ${this.subclass}`
    );
  }
}

// Subclass for animals with backbone
class WithBackbone extends animalKingdom {
  constructor(name, type, subclass) {
    super(name, type);
    this.subclass = subclass;
  }

  //For Polymorphism, to Override displayInfo method
  displayInfo() {
    console.log(
      `Name: ${this.name}, Type: ${this.type}, Subclass: ${this.subclass}`
    );
  }
}

// Subclass for Cold-Blooded Animals
class ColdBlooded extends animalKingdom {
  constructor(name, type, subclass) {
    super(name, type);
    this.subclass = subclass;
  }

  //For Encapsulation, tp Keep subclass property private
  getSubclass() {
    return this.subclass;
  }

  //For Polymorphism, to Override displayInfo method
  displayInfo() {
    console.log(
      `Name: ${this.name}, Type: ${this.type}, Subclass: ${this.subclass}`
    );
  }
}

// Subclass for Warm-Blooded Animals
class WarmBlooded extends animalKingdom {
  constructor(name, type, subclass) {
    super(name, type);
    this.subclass = subclass;
  }

  //For Encapsulation, to Keep subclass property private
  getSubclass() {
    return this.subclass;
  }

  //For Polymorphism, to Override displayInfo method
  displayInfo() {
    console.log(
      `Name: ${this.name}, Type: ${this.type}, Subclass: ${this.subclass}`
    );
  }
}

// Instances
const arthropoda = new WithoutBackbone(
  "Insect",
  "Without Backbone",
  "Arthropoda"
);
const fish = new WithBackbone("Salmon", "With Backbone", "Fish");
const amphibian = new WithBackbone("Frog", "With Backbone", "Amphibian");
const reptile = new WithBackbone("Snake", "With Backbone", "Reptile");
const aves = new WarmBlooded("Eagle", "Warm-Blooded", "Aves");
const mammals = new WarmBlooded("Dolphin", "Warm-Blooded", "Mammals");

// now, finally, to display information
arthropoda.displayInfo();
fish.displayInfo();
amphibian.displayInfo();
reptile.displayInfo();
aves.displayInfo();
mammals.displayInfo();
