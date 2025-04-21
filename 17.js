//arrow function
var names = function (name) {
    console.log("hello", "".concat(name));
};
names("mz");
// return
var addition = function (num1, num2) {
    return num1 + num2;
};
console.log(addition(2, 5));
var greet = function () { return "hello"; };
console.log(greet());
var namess = function (a) {
    if (a === void 0) { a = 10; }
    console.log(a);
};
namess(2);
