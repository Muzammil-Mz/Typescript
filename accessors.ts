//Accessors in TypeScript provides a way to access and set the value of the class members using the getter and setter methods. They control how class members are 
// accessed to read or write their values.

// TypeScript supports the followings to access and change class members:

// getters :Getters are used to access the values of class members and manage how these values are accessed outside of the class. They can be created using the 'get' keyword.

// setters :setters are used to set the value of class members without accessing them outside of the class. They use the 'set' keyword to define the setter method.

// class Person {
//     // Defining the private field
//     private Name: string;

//     // Defining the constructor
//     constructor(Name: string) {
//         this.Name = Name;
//     }

//     // Defining the getter
//     get SName(): string {
//         return this.Name;
//     }
// }

// // Creating an instance of the Person class
// const person = new Person("John");
// console.log(person.SName); // Outputs: John



/////////////////////////////
class TextContainer {
    // Define a private property
    private _content: string = '';

    // Setter method
    set content(value: string) {
        this._content = value.trim().toLowerCase();
    }

    // Getter method
    get content(): string {
        return this._content;
    }
}

// Create an instance of the class and set the content
const text = new TextContainer();
text.content = "  Hello, WORLD!  ";
console.log(text.content); // Outputs: hello, world!