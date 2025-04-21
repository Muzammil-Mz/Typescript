// In TypeScript, static properties belong to the class itself, instead of the instances of the class. The static methods and properties can be accessed without using the instance of the classes. This means you do not need to create an object of the class 
// to use these methods and properties.

// There are two types of properties and methods in TypeScript. One is instance properties and methods and another one is static properties and methods. 
// Here, you will learn about static properties and methods.

// Static properties and methods are useful to create utility functions and constants that don't change across different instances. For example, if you are 
// creating the circle class, and want to define the 'PI' property inside the class, you can make it static as it is a constant.

class Circle {
    static pi: number = 3.14159; // Static property to hold the value of Pi
}
console.log("The value of the PI is: " + Circle.pi); //the value of pi is 3.14159