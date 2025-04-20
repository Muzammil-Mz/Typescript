// if else in ts
var age = 20;
if (age >= 18) {
    console.log("can vote");
}
else {
    console.log("cant vote");
}
// in terminal :- tsc 6.ts this generates a filewith file.js and then node filename.js gives output
// nested if
var x = 19;
if (x >= 13 && x <= 19) {
    console.log("teen");
}
else if (x > 19) {
    console.log("adult");
}
else {
    console.log("enter valid number");
}
