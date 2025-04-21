//TypeScript provides us with readonly keyword to make a property in class, type or interface as read-only. The readonly properties can be accessed
// outside the class but their values can't be modified.

// In the above syntax, 'readonly' is a keyword.

// The 'propName' is a property name of the readonly property.

// The 'type' is a property type of the readonly property.

interface Car {
  model: string;
  year: number;
  readonly fuel: string;
}

// Defining the car object
let car: Car = {
  model: "BMW",
  year: 2019,
  fuel: "petrol",
};

car.fuel="diesle" //not possible due to readonly
console.log(car.model);
console.log(car.year);
console.log(car.fuel);


// readonly used due to:
//data integrity 
// functional programming 
// api contracts