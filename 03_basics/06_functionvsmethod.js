//  Programming (especially OOP - Object Oriented Programming) me "method" aur "function" dono terms use hote hain,
// lekin dono me thoda farak hota hai, jo bahut important hai samajhna.



// ### **1. Function:**

//  Function ek aisa code block hota hai jo independently kaam karta hai — matlab kisi object se link nahi hota.
//  Ye global level pe ya kisi function ke andar bhi define ho sakta hai.
//  Function ko aap uske naam se call karte ho, aur isme parameters leke kuch value return kar sakte ho.


// **Example of a function:**

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// // Calling the function
// console.log(greet("John"));  // Output: Hello, John!


//  Yahan `greet` ek simple function hai jo `name` input leta hai aur greeting message return karta hai.
// Iska kisi object se lena-dena nahi hai — ye bilkul standalone hai.





// ### **2. Method:**

//  Method ek function hi hota hai, lekin wo kisi object ya class ke andar defined hota hai.
//  Matlab: ye object ke sath **bind** hota hai — aur object ke behaviour ko define karta hai.
//  Method ko hum object ke naam ke through call karte hain (dot notation se), 
//  aur iske andar `this` ka use karke wo object ke properties ko access kar sakta hai.


// **Example of a method:**


// const person = {
//     name: "Alice",
//     greet: function() {
//         return `Hello, ${this.name}!`;
//     }
// };

// // Calling the method
// console.log(person.greet());  // Output: Hello, Alice!


//  Yahan `greet` ek method hai kyunki ye `person` object ke andar hai.
// Isme `this.name` ka use hua hai — jiska matlab hai: ye us object ka `name` access kar raha hai.






// ### **Key Differences Between Function and Method:**

// | 🔍 **Aspect**           | ✅ **Function**                              | ✅ **Method**                                               
// | ----------------------- | --------------------------------------------- | ---------------------------------------------------------- |
// | **Definition**          | Ek code block jo independently kaam karta hai | Ek function jo kisi object/class ke andar defined hota hai |
// | **Object se link**      | Kisi object se link nahi hota                 | Hamesha kisi object/class se linked hota hai               |
// | **Kaise call karte ho** | Naam se (e.g., `greet()`)                     | Object ke through (e.g., `person.greet()`)                 |
// | **`this` ka use**       | Nahi kar sakte unless kisi object me ho       | `this` use karke object ke properties ko access karte hain |
// | **Example**             | `function greet(name) {...}`                  | `{ greet: function() {...} }`                              |
// | **Context**             | Global ya function scope                      | Jis object/class me defined hai, uska context hota hai     |




// ### **Important Notes:**


// 1. **Function in Object:**
//    - When a function is a part of an object, it becomes a method. So, essentially, a method is just a function that belongs to an object.

//    Example:

//    const car = {
//        brand: "Toyota",
//        drive: function() {
//            console.log("Driving the " + this.brand);
//        }
//    };

//    car.drive(); // Output: Driving the Toyota



// `drive` yahan ek function hai jo `car` object ke andar hai,
// isliye wo method kehlaata hai.
// Aur `this.brand` ka use karke object ke andar ke data ko access karta hai.


//    Example with class:

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


//  Yahan `greet()` ek method hai kyunki ye `Person` class ke andar defined hai.
// Jab hum `new Person()` se object banate hain (jaise `person1`), tab ye method us object se link ho jata hai.



// ### **Summary:**


// - Function: Ek standalone block hota hai jo kisi object se link nahi hota. Use naam se call karte hain.

// - Method: Ek aisa function hota hai jo object ya class ke andar hota hai, aur us object ka behaviour define karta hai.

// Function ≠ Method, lekin method ek function ka hi object-version hota hai.


// In simpler terms:


// - **Function** = Akele chalta hai — object ke bahar.

// - **Method** = Sirf object/class ke andar chalta hai — aur `this` use karta hai.