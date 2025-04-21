// interfaces are a powerful way to define the shape of objects and enforce type constraints. They allow us to specify the required
// properties and methods that an object must have. One interesting feature of interfaces is the ability to extend them, allowing us to create a combination
// of interfaces. Extending an interface is also known as interface inheritance.

interface Printable {
  print(): void;
}

interface Scannable {
  scan(): void;
}

interface MultiFunc extends Printable, Scannable {
  copy(): void;
}

class Printer implements MultiFunc {
  print() {
    console.log("prinitng");
  }
  scan(): void {
    console.log("scanning");
  }
  copy(): void {
    console.log("copying");
  }
}

const printer = new Printer();
printer.print();
printer.copy();
printer.scan();
