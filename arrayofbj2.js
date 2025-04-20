//multiple structures being used
var staff = [
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
var total = [
    {
        name: "mz",
        class: 10,
        subject: "hinid",
    },
    { name: "raj", class: 12 },
    { name: "zahn", class: 8 },
];
for (var _i = 0, total_1 = total; _i < total_1.length; _i++) {
    var x = total_1[_i];
    if ("subject" in x) {
        console.log("Teacher ".concat(x.name, " teaching in ").concat(x.class, " for ").concat(x.subject));
    }
    else {
        console.log("student ".concat(x.name, " studying in ").concat(x.class));
    }
    // console.log(x);
}
for (var y in total) {
    console.log(total[y]);
}
