interface students1 {
  name: string;
  class: number;
}

interface teachers1 {
  name: string;
  class: number;
  subject: string;
}

let totals: (students1 | teachers1)[] = [
  {
    name: "mz",
    class: 10,
    subject: "hinid",
  },
  { name: "raj", class: 12 },
  { name: "zahn", class: 8 },
];
for (let y in totals) {
  let persons = totals[y];
  if ("subject" in persons) {
    console.log(`teacher ${persons.name}`);
  } else {
    console.log(`student ${persons.name}`);
  }
}
