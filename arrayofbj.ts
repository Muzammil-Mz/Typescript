//explainng about arrays of object which is used to store multiple similar items
//firstly specify the obj and then pass multiple values in array of obj
//obj type specified using type conatain = after var name or using interface

//gave structure of car using interface can also use type to give structure
interface Car {
  name: string;
  model: number;
}

let cars: Car[] = [
  {
    name: "bmw",
    model: 4220,
  },
  { name: "merceds", model: 354 },
  { name: "honda", model: 48 },
];
console.log(cars);
console.log(cars[0].name); //to access specific element from the array of obj ==>"bmw"
