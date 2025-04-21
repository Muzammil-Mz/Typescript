// interfaces are a powerful way to define the shape of objects and enforce type constraints. They allow us to specify the required
// properties and methods that an object must have. One interesting feature of interfaces is the ability to extend them, allowing us to create a combination
// of interfaces. Extending an interface is also known as interface inheritance.
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function () {
        console.log("prinitng");
    };
    Printer.prototype.scan = function () {
        console.log("scanning");
    };
    Printer.prototype.copy = function () {
        console.log("copying");
    };
    return Printer;
}());
var printer = new Printer();
printer.print();
printer.copy();
printer.scan();
