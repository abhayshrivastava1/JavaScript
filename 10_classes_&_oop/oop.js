// const user = {
//     username: "Abhay",
//     logincount: 8,
//     signedIn: true,

//     getDetails: function(){
//         console.log("Got details");
//     }
// }

// console.log(user.username);
// console.log(user.getDetails());

// this keyword -

// In JavaScript, the `this` keyword is a reference to the current execution context. Its value depends on how a function is called: 

// - In a method, `this` refers to the object that the method is called on.
// - In a constructor function, `this` refers to the newly created instance.
// - In event handlers, `this` refers to the element that triggered the event.
// - Using `call()`, `apply()`, or `bind()`, `this` can be explicitly set to a specific value.
// - In global scope or non-method functions, `this` refers to the global object (in non-strict mode) or `undefined` (in strict mode).

// Understanding the context of `this` is crucial for writing JavaScript code that behaves as expected.

// jaise we created three arreay 
// arr1[]= {1,2,3}
// arr1[]= {1,2,3,4}
// arr1[]= {1,2,3,4,5}
// ab haumein map ko lagana hai toh map ko kaise pata lagega ki kis par lagega toh uske liye this keyword use hota hai


// const user = {
//     username: "Abhay",
//     logincount: 8,
//     signedIn: true,

//     getDetails: function(){
//         // console.log(`username: ${username}`); // error username is not defined kyunki humne yahan par context nhi bataya hai
//         console.log(`username: ${this.username}`); // o/p Abhay
//         // console.log(this); 
//         // o/p {
//         //     username: 'Abhay',
//         //     logincount: 8,
//         //     signedIn: true,
//         //     getDetails: [Function: getDetails]
//         //   }
//     }
// }

// console.log(user.username);
// console.log(user.getDetails());
// console.log(this); // o/p {}
// In browser it gives window object


function User(username, logincount, isloggedIn){
    // username = username //yahan par humein yeh nhi pata ki iss line par likha hua username aur username jo hum pass kar rahe hai, yeh same hai ya nahi??
    this.username = username // lha vali variable hai aur rhs vali value jo hum pass karke de rahe hai
    this.logincount = logincount
    this.isloggedIn = isloggedIn

    // this.greeting = function(){
    //     console.log(`Welcome ${this.username}`);
    // }

    return this  // not neccessary to write
    // ab koi bhi inn poori values ko access kar sakta hai
}


// const userOne = User("Abhay", 22, false)
// console.log(userOne); 
// o/p   
// username: 'Abhay',
// logincount: 22,
// isloggedIn: false

// const userTwo = User("Abhay2", 28, true)
// console.log(userOne); 
// o/p
// username: 'Abhay2',
// logincount: 28,
// isloggedIn: true


const userOne = new User("Abhay", 22, false)
console.log(userOne); 
// o/p User { username: 'Abhay', logincount: 22, isloggedIn: false }

const userTwo = new User("Abhay2", 28, true)
// console.log(userOne); 
// o/p User { username: 'Abhay', logincount: 22, isloggedIn: false }
// console.log(userTwo);
// o/p User { username: 'Abhay2', logincount: 28, isloggedIn: true }

console.log(userOne.constructor); // o/p [Function: User] yeh humein humare baare mein batata hai






// write from 27:10 
// read instanceof, constructor from mdn 