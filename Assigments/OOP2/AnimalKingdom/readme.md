# Animal Kingdom Classification System

## Overview

This simple JavaScript program models the classification system of the Animal Kingdom, applying the four principles of Object-Oriented Programming (OOP): Inheritance, Encapsulation, Polymorphism, and Abstraction.

## Classes and Classification

### 1. Inheritance

Inheritance is the OOP principle where a new class inherits properties and behaviors from an existing class. Here, we have a base class `Animal` with common properties like `name` and `type`. Subclasses (`WithoutBackbone`, `WithBackbone`, `ColdBlooded`, and `WarmBlooded`) inherit from `Animal` to represent different levels of classification in the Animal Kingdom.

```javascript
class WithoutBackbone extends Animal {}
class WithBackbone extends Animal {}
class ColdBlooded extends Animal {}
class WarmBlooded extends Animal {}
```

### 2. Encapsulation

Encapsulation involves bundling data (properties) and methods (functions) that operate on the data within a single unit, called a class. We use encapsulation by keeping the `subclass` property private within the `ColdBlooded` and `WarmBlooded` classes, accessed through getter methods.

```javascript
class ColdBlooded extends Animal {
  getSubclass() {
    return this.subclass;
  }
}
class WarmBlooded extends Animal {
  getSubclass() {
    return this.subclass;
  }
}
```

### 3. Polymorphism

Polymorphism allows a single interface (method) to be used for different types of objects. In our code, the `displayInfo` method is overridden in each subclass, showcasing polymorphism.

```javascript
class WithoutBackbone extends Animal {
  displayInfo() {
    console.log(
      `Name: ${this.name}, Type: ${this.type}, Subclass: ${this.subclass}`
    );
  }
}
class WithBackbone extends Animal {
  displayInfo() {
    console.log(
      `Name: ${this.name}, Type: ${this.type}, Subclass: ${this.subclass}`
    );
  }
}
```

### 4. Abstraction

Abstraction simplifies complex systems by breaking them down into more manageable parts. The `displayInfo` method in the `Animal` class provides a high-level abstraction, displaying basic information for all animals.

```javascript
class Animal {
  displayInfo() {
    console.log(`Name: ${this.name}, Type: ${this.type}`);
  }
}
```

## Usage

To use this system, create instances of the classes for different animals and call the `displayInfo` method to see their information.

```javascript
const arthropoda = new WithoutBackbone(
  "Insect",
  "Without Backbone",
  "Arthropoda"
);
arthropoda.displayInfo();
```

This program provides a simple and easy to understand introduction to OOP principles in JavaScript as it represent the classification system of the Animal Kingdom.
