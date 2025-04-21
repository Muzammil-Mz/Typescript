// param destructuring in ts
function printValues(_a) {
    var key1 = _a.key1, key2 = _a.key2;
    console.log("name of obj 1 is ".concat(key1));
    console.log("key of obj2 is ".concat(key2));
}
printValues({ key1: "raj", key2: 33 });
