// if else in ts
let age: number = 20;
if (age >= 18) {
  console.log("can vote");
} else {
  console.log("cant vote");
}

// in terminal :- tsc 6.ts this generates a filewith file.js and then node filename.js gives output

// nested if
let userage: number = 109;

if (userage >= 13 && userage<=19) {
  console.log("teen");
} else if (userage > 19) {
  console.log("adult");
} else {
  console.log("enter valid number");
}
