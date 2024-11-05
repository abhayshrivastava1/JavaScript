// The terms **method** and **function** are often used interchangeably, but there are key differences between them in programming, especially in object-oriented programming (OOP).

// ### **1. Function:**
// - A **function** is a block of code that can be called independently and can perform a specific task or calculation.
// - Functions are **not tied to any object**. They can be declared in the global scope or within another function.
// - Functions can be invoked by name, and they can accept parameters and return values.

// **Example of a function:**

// ```javascript
// function greet(name) {
//     return `Hello, ${name}!`;
// }

// // Calling the function
// console.log(greet("John"));  // Output: Hello, John!
// ```

// - In this case, `greet` is a function that takes `name` as an argument and returns a greeting message. It is not associated with any object.

// ### **2. Method:**
// - A **method** is a **function** that is associated with an object or a class.
// - Methods are **tied to the object** they belong to and are used to define the behavior of that object.
// - Methods are invoked using the object that owns them. They can also access and modify the object's properties using `this`.

// **Example of a method:**

// ```javascript
// const person = {
//     name: "Alice",
//     greet: function() {
//         return `Hello, ${this.name}!`;
//     }
// };

// // Calling the method
// console.log(person.greet());  // Output: Hello, Alice!
// ```

// - In this example, `greet` is a method because it is a function that belongs to the `person` object. It uses `this` to access the object's property `name`.

// ### **Key Differences Between Function and Method:**

// | **Aspect**              | **Function**                                           | **Method**                                                  |
// |-------------------------|--------------------------------------------------------|-------------------------------------------------------------|
// | **Definition**          | A block of reusable code that can be called independently. | A function that is part of an object or class.              |
// | **Association**         | Not tied to any object or class (can be standalone).     | Tied to an object or class (invoked on an object).          |
// | **Invocation**          | Called by its name.                                    | Called on an object using dot notation (e.g., `object.method()`). |
// | **Use of `this`**       | Cannot use `this` unless inside an object (or a method). | Can use `this` to refer to the object it belongs to.        |
// | **Example**             | `function greet(name) { return "Hello, " + name; }`     | `const person = { greet: function() { return "Hello, " + this.name; }};` |
// | **Context**             | The context is usually the global scope or the function itself. | The context is the object that the method is a part of.     |

// ### **Important Notes:**

// 1. **Function in Object:**
//    - When a function is a part of an object, it becomes a method. So, essentially, a method is just a function that belongs to an object.
   
//    Example:
//    ```javascript
//    const car = {
//        brand: "Toyota",
//        drive: function() {
//            console.log("Driving the " + this.brand);
//        }
//    };
   
//    car.drive(); // Output: Driving the Toyota
//    ```

//    In this example, `drive` is a function, but because it's inside the `car` object, it is a **method** of that object.

// 2. **Method vs. Function in Classes (Object-Oriented Programming):**
//    - In object-oriented programming, when you define a function inside a class, it becomes a **method** of that class.
   
//    Example with class:
//    ```javascript
//    class Person {
//        constructor(name) {
//            this.name = name;
//        }

//        greet() {
//            return `Hello, ${this.name}!`;
//        }
//    }

//    const person1 = new Person("John");
//    console.log(person1.greet()); // Output: Hello, John!
//    ```

//    Here, `greet` is a method of the `Person` class, because it is tied to an instance of the class (`person1`).

// ### **Summary:**
// - **Function**: A block of code that can be called on its own. It can be defined globally or locally, and it is not tied to any object.
// - **Method**: A function that is **attached** to an object or class, and it operates on that object’s properties. It is invoked using the object (e.g., `object.method()`), and often uses `this` to refer to the object itself. 

// In simpler terms:
// - **Function** = standalone block of code.
// - **Method** = function associated with an object or class.

