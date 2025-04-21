// the class1 is the abstract class, which contains the declaration of the abstract method name method1. 
// The class2 only contains the definition of method2(). It extended class1 but didnt implement the abstract method named method1().

// After that, we defined class3 and inherited it via class2. Also, we have defined the method1 of class inside class3. At last, we 
// created the object of class3 and invoked the method1() and method2().

// define the abstract class1 containing the abstract method1
abstract class class1 {
   abstract method1(): void;
}
// Need to create class2 to abstract as we inherited class1 but doesn't defined abstract method1()
abstract class class2 extends class1 {
   method2(): void {
      console.log("Inside the method 2 of class2.");
   }
}
// defining the class3 inherited by the class2
class class3 extends class2 {
   // Implementation of the method1 of the abstract class1
   method1(): void {
      console.log(
         "Implemented the abstract method name method1 of class1 inside the class3"
      );
   }
}
// Crating the object of the class3
var object = new class3();

// Invoking the method1 of class1 which is declared in the abstract class1
object.method1();

// Invoking the method2 of class2
object.method2();
