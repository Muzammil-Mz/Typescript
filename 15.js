// let x:number=1
// do {
//   console.log(x);
//   x++
// }
// while(x<=10)
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var a;
    var sum = 0;
    for (a = 0; a < nums.length; a++) {
        sum = sum + nums[a];
    }
    console.log(sum);
}
addNumbers(1, 2, 3);
