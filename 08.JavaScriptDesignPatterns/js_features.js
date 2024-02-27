class shape {
  constructor(type, width, height) {
    this.type = type;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// we can create an object from the class by instantiating the class
const rectangle = new shape("rectangle", 200, 100);

rectangle.area();

square.area();
