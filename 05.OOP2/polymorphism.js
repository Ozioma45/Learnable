class Shape {
  constructor() {
    if (this.constructor == Shape) {
      throw new Error("Please Implement this class instead");
    }
  }
  area() {
    throw new Error("This cannot be implemented directly");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    const area = Math.PI * this.radius ** 2;
    return area;
  }
}

const circle = new Circle(9);

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  area() {
    return this.length * this.length;
  }
}

const square = new Square(10);
console.log(square.area());
