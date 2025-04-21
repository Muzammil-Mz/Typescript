//activity with for of and for in loop
var total = [
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
for (var _i = 0, total_1 = total; _i < total_1.length; _i++) {
    var a = total_1[_i];
    if ("hotel" in a) {
        console.log("hotel guy");
    }
    else {
        console.log("staff");
    }
}
