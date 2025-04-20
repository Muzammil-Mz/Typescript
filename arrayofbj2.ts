//multiple structures being used

interface teachers {
  name: string;
  class: number;
  subject: string;
  mobile?: number; // this is optional
}

interface students {
  name: string;
  class: number;
}

let staff: (teachers | students)[] = [
  //teachers/students example of union type
  {
    name: "kishore",
    class: 54,
  },
  {
    name: "mz",
    class: 68,
  },
];

//to add a object
staff.push({
  name: "Rizwan",
  class: 12,
  // subject: "Math"
});

console.log(staff);
console.log(staff[0].class);

//looping through students, teachers name

interface students1 {
  name: string;
  class: number;
}

interface teachers1 {
  name: string;
  class: number;
  subject: string;
}

let total: (students1 | teachers1)[] = [
  {
    name: "mz",
    class: 10,
    subject: "hinid",
  },
  { name: "raj", class: 12 },
  { name: "zahn", class: 8 },
];

for (let x of total) {
  if ("subject" in x) {
    console.log(`Teacher ${x.name} teaching in ${x.class} for ${x.subject}`);
  } else {
    console.log(`student ${x.name} studying in ${x.class}`);
  }
  // console.log(x);
}


