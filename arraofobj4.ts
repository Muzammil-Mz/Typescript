//activity with for of and for in loop

interface managers {
  name: string;
  couter: number;
  hotel: string;
}

interface boys {
  name: string;
  counter: number;
}

let total: (managers | boys)[] = [
  {
    name: "mz",
    counter: 55,
  },
  { name: "zm", counter: 525, hotel: "true" },
  { name: "raj", counter: 582, hotel: "yes" },
];

// for (let x in total) {
//   let z = total[x];
//   if ("hotel" in z) {
//     console.log(`Hotel guy`);
//   } else {
//     console.log("boys gang");
//   }
// }

for (let a of total) {
  if ("hotel" in a) {
    console.log("hotel guy");
  } else {
    console.log("staff");
  }
}
