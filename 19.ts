//multiple interfaces

interface Parent {
  age: number;
}

interface Child {
  gender: string;
}

interface Teen extends Parent, Child {}
let obj: Teen = {
  age: 22,
  gender: "male",
};

console.log(obj);
