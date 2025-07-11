//object can be declared two types :-

// (1)literal:- Literal Syntax se: Directly curly braces { } ke saath object banate hain.
// (2)constructor:- new keyword ke saath Object() ya custom constructor function ke use se.

// singleton means kisi bhi constructor se hum object banate hai toh ye apne tarah ka ek hi object hai

// Object.create 
// ek method hai jo humein ek naye object banane ki facility deta hai, par wo naye object ko ek existing object ko as prototype use karke banata hai.

// object literals

// Agar hum object ko { } literal syntax se banate hain, toh ye singleton nahi hota, yani hum waise hi aur bhi objects bana sakte hain, jo alag honge aur unique instance nahi banenge.

const mySym = Symbol("key1")

//objects mein key-value pair exist karte hai jisme keys are string and value can be of any data type
const JsUser = {
    name: "Abhay",// name is stored as string "name"
    "full name": "Abhay Shrivastava",
    //mySym: "mykey1",// abhi ye symbol ki jagah as string hi use ho raha hai 
    [mySym]: "mykey1",// symbol ki tarah use karne ke liye isko square bracket ke andar hi likhna hoga
    age: 20,
    location: "Mohali",
    email: "abhay@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])//isme email ko as a string dena jaruri hai
//dono ka o/p abhay@google.com hi aayega

//console.log(JsUser.full name)// full name ko ab sirf square bracket vale tarike se hi access kar sakte hai
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])//symbol ke liye bhi hum sirf square bracket vala notation use kar sakte hai


// . (dot notation) सिर्फ उन properties को access कर सकता है जिनके नाम में spaces या special characters नहीं हैं। "full name" में space है, इसलिए इसे dot notation से directly access नहीं कर सकते।
// bracket notation complex names (spaces, special characters, symbols) के लिए।


JsUser.email = "abhay@chatgpt.com"
// Object.freeze(JsUser)//iss object mein ab aage jaakar koi change nahi kar sakte hai
//but agar hum koi change karne ki try karenge toh ye koi error show nahi karega
JsUser.email = "abhay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}// in js, function ko hum variables ki tarah treat kar sakte hai

JsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
  //for refrence name in object par usse pehle isse strings se backticks mein convert karna hoga
  //In JavaScript, when you want to include variables or expressions within a string, you need to use template literals (backticks `), not regular quotes (' or "). Template literals allow you to embed expressions inside strings using ${...} syntax.
}

console.log(JsUser.greeting);
// o/p [Function (anonymous)] 
// function execute nhi hua hai bs uska ek refrence aaya hai

console.log(JsUser.greeting());
// Hello JS user
// undefined

console.log(JsUser.greetingTwo());
// Hello JS user, Abhay
// undefined

// Functions greeting और greetingTwo दोनों ही console.log() के अंदर call किए गए हैं, और दोनों functions कुछ return नहीं कर रहे, इसलिए उनकी call का result undefined आता है।




// Singleton vs. Non-Singleton

// 1. Singleton Object:

// एक singleton object ऐसा object है जो अपने type का सिर्फ एक ही instance बना सकता है।

// इसका मतलब है कि application में उस class या object का सिर्फ एक ही version रहेगा, चाहे आप उसे कितनी भी बार access करें।

// इसे बनाने का मुख्य उद्देश्य resources को optimize करना और ये सुनिश्चित करना है कि पूरे application में उस object का एक ही instance हो।


// Example

// const Singleton = (function () {
//     let instance;
    
//     function createInstance() {
//         return { name: "I am the only instance" };
//     }
    
//     return {
//         getInstance: function () {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     };
// })();

// const obj1 = Singleton.getInstance();
// const obj2 = Singleton.getInstance();

// console.log(obj1 === obj2); // Output: true

// यहाँ obj1 और obj2 दोनों ही Singleton के same instance को refer कर रहे हैं।


// 2. Non-Singleton Object:

// Non-singleton objects ऐसे objects होते हैं जिनका जितने चाहें उतने instances बनाए जा सकते हैं। हर बार नया instance create किया जाता है।

// Non-singleton objects का कोई restriction नहीं होता कि वो केवल एक ही instance रहेंगे। इसलिए हर new call पर एक नया instance बनता है।


// Example:

// function User(name) {
//     this.name = name;
// }

// const user1 = new User("Alice");
// const user2 = new User("Bob");

// console.log(user1 === user2); // Output: false
// यहाँ user1 और user2 दो अलग instances हैं, और दोनों का memory में अलग-अलग स्थान है।
