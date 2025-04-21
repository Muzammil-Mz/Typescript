// Duck-typing
// In duck-typing, two objects are considered to be of the same type if both share the same set of properties. Duck-typing verifies the presence of certain properties in the objects, rather than their actual type, to check their suitability. The concept is generally explained by the following phrase

// When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.

// The TypeScript compiler implements the duck-typing system that allows object creation on the fly while keeping type safety. The following example shows how we can pass objects that dont explicitly implement an interface but contain all of the required members to a function.
//The usage of interfaces in TypeScript makes duck typing possible. Where interface means the set of methods and characteristics an object must have to fall under that type are described.

//making code more flexible and reusable.

interface Flyable {
    fly(): void;
 }
 
 class Bird implements Flyable {
    fly(): void {
       console.log("Bird is flying");
    }
 }
 
 class Plane implements Flyable {
    fly(): void {
       console.log("Plane is flying");
    }
 }
 
 function goFly(flyable: Flyable) {
    flyable.fly();
 }
 
 let bird = new Bird();
 let plane = new Plane();
 
 goFly(bird); // Prints "Bird is flying"
 goFly(plane); // Prints "Plane is flying"

 //duck typing is a powerful programming concept that allows for greater flexibility and reusability in TypeScript code by allowing objects of different types to be used interchangeably as long as they have the same methods and properties