// param destructuring in ts

function printValues({ key1, key2 }: { key1: string; key2: number }) {
  console.log(`name of obj 1 is ${key1}`);
  console.log(`key of obj2 is ${key2}`);
}

printValues({ key1: "raj", key2: 33 });
