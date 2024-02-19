//define an empty class
class Human {
  numberOfEyes = 2; //instance property
  hairColor = "black";

  static numberOfLegs = 2; //static property

  cry() {
    console.log("i am crying 😭😭😭");
  }

  displaySelf() {
    console.log(this);
  }

  displayHairColor() {
    console.log(this.hairColor);
    this.displaySelf();
  }

  static accessStatic() {
    console.log(Human.numberOfLegs);
  }
}

//instantiate an object
const human = new Human();

human.hairColor = "Red";

Human.numberOfLegs = 13;

//human.displayHairColor();

//Human.accessStatic();

//Constructor method
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    console.log(this.age);
  }

  setAge(age) {
    this.age = age;
  }
}

const john = new Person("John", 12);
//console.log(john);

const Joy = new Person("Joy", 120);
//console.log(Joy);

john.getAge();

john.setAge(150);

john.getAge();

console.log(john);
