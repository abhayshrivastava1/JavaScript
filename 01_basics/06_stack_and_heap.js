// Stack (Primitive), Heap (Non-Primitive)

// Stack
// In JavaScript, stack memory is used for storing primitive data types and function call frames, operating on a Last In, First Out (LIFO) basis, which allows for fast allocation and deallocation; however, it has a limited size and is scoped to the function in which the variables are declared.
// Primitive Data Types (e.g., numbers, strings, booleans) are passed by value, meaning that when you assign or pass them, a copy of the actual value is created. Changes to one variable do not affect the other.

// Heap
// In contrast, heap memory is used for non-primitive data types like objects and arrays, allowing for dynamic memory allocation and larger data sizes, but it is slower to access and managed through garbage collection, meaning the memory remains allocated until no references to it exist.
// Non-Primitive Data Types (e.g., objects, arrays) are passed by reference, meaning that when you assign or pass them, a reference to the original object is created. Consequently, changes made to the object through one variable will affect all variables that reference that object.

let myName = "Abhay"

let anotherName = myName // iss line mein anotherName ko myName ki value nahi dii jati but uski ek copy dii jati hai
// aur humne copy mein change kiya hai toh change copy mein hi hoga naa ki original value meim
anotherName = "Shrivastava"

console.log(myName);
console.log(anotherName);


let user1 = {
    email: "abhay@google.com",
    school: "KV"
}

let user2 = user1// yahan par original value ka refrence diya jata hai toh 
//agar user2 mein koi change kiya jayega toh vo change user1 mein bhi dikhega

user2.school = "nitj"

console.log(user1.email)
console.log(user1.school)