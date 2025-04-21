// The concept access modifiers are used to implement encapsulation or data hiding in TypeScript. The access modifiers define the visibility class members outside the defining class.
// The class members are properties and functions. The access modifiers are also known as access specifiers.
// TypeScript supports three types of access modifiers public, private and protected. These modifiers are the keywords that are used to declare a class
// member as public, private or protected.
//public access modiifers are universal and visible to all by default The public members are accessible from anywhere within and outside the class that defines the member.
// class Person {
//   public name: string = "";
//   age: number;
// }
// const person = new Person();
// person.name = "mz";
// console.log(person.name);
//
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var details = new Person("mz");
console.log(details);
