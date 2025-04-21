//TypeScript is object oriented JavaScript. TypeScript supports object-oriented programming features like classes, interfaces, etc. A class in terms of OOP is a blueprint for creating objects

// A class definition can include the following −

// Fields − A field is any variable declared in a class. Fields represent data pertaining to objects

// Constructors − Responsible for allocating memory for the objects of the class

// Functions − Functions represent actions an object can take. They are also at times referred to as methods

class Car {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }
  disp(): void {
    console.log(`car is ${this.engine}`);
  }
}

let Care = new Car("bmm");
Care.disp();



