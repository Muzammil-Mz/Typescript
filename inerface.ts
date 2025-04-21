// an interface defines the syntax that any entity must adhere to.

//Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members.
interface classes {
  name: string;
  class: number;
  sayHi: () => string;
}

let clasy: classes = {
  name: "mz",
  class: 55,
  sayHi: () => {
    return "hello";
  },
};

console.log(clasy.name);
