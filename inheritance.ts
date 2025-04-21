// Inheritance in TypeScript is a concept that allows us to reuse the properties and methods of a single class
// with other classes. So, it increases the code readability by allowing the reuse of the codes of different classes.

// class Vehicle {
//   getType() {
//     return "Vehicle";
//   }
// }

// // Define a class Car that extends Vehicle
// class Car extends Vehicle {
//   carName: string = "Innova";
//   getCarName() {
//     return this.carName;
//   }
// }

// // Create an object of Car class
// let car = new Car();
// console.log(car.getType()); // Output: Vehicle
// console.log(car.getCarName()); // Output: Innova


//Super Keyword
// The super keyword is used to call the constructor of the Parent class or access and call the method of the Parent class.

// class Child extends Parent {
//     constructor() {
//         super();  // To call the constructor of the parent class
//     }
//     super.method_name(); // To call method of the parent class
// }


// method overriding
class Animal {
    move() {
        console.log("Animal is moving");
    }
}

// Dog class is inheriting Animal class
class Dog extends Animal {
    // Method overriding
    move() {
        console.log("Dog is moving");
    }
}

let dog = new Dog();
dog.move(); // Output: Dog is moving