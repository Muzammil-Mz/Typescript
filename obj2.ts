//passing obj as function parameter

// let namer = {
//   name: "mz",
//   class: 22,
// };

// let details = function (obj: { name: string; class: number }) {
//   console.log(`namw is ${obj.name}`);
//   console.log(`age is ${obj.class}`);
// };
// details(namer);
 
// or using anaonymous func

let details2 = function (obj: { name: string; age: number }) {
  console.log(`name is ${obj.name}`);
  console.log(`age is ${obj.age}`);
};

details2({name:"mz",age:55})