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
// or
var details2 = function (obj) {
    console.log("name is ".concat(obj.name));
    console.log("age is ".concat(obj.age));
};
details2({ name: "mz", age: 55 });
