var totals = [
    {
        name: "mz",
        class: 10,
        subject: "hinid",
    },
    { name: "raj", class: 12 },
    { name: "zahn", class: 8 },
];
for (var y in totals) {
    var persons = totals[y];
    if ("subject" in persons) {
        console.log("teacher ".concat(persons.name));
    }
    else {
        console.log("student ".concat(persons.name));
    }
}
