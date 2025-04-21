//In TypeScript, the type guards are used to determine a variable's type, often inside a conditional or functional block. The type guards usually take the variable and return a Boolean value or the variable type. Type guards allow you to tell the TypeScript compiler to infer a given type for a variable in a 
// specific context, guaranteeing that an argument's type is what you say it is.

// typepf
// Number

// String

// Boolean

// Object

// Bigint

// Symbol

// Function

// Undefined

let my_number: number = 123
let my_string: string = 'Tutorialspoint'
let my_boolean: boolean = true
let my_object: { id: number } = { id: 1 }

console.log('type of my_number variable is: ' + typeof my_number)
console.log('type of my_string variable is: ' + typeof my_string)
console.log('type of my_boolean variable is: ' + typeof my_boolean)
console.log('type of my_object variable is: ' + typeof my_object)