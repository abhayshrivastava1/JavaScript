//object can be declared tow types (1)literal (2)constructor
// singleton means kisi bhi constructor se hum object banate hai toh ye apne tarah ka ek hi object hai
// Object.create //this is constructor method

// object literals
// literal se agar hum banayenge toh vo singleton nahi banega

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
// console.log(JsUser["email"])//isme email to asa a string dena jaruri hai
//dono ka o/p abhay@google.com hi aayega

//console.log(JsUser.full name)// full name ko ab sirf square bracket vale tarike se hi access kar sakte hai
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])//symbol ke liye bhi hum sirf square bracket vala notation use kar sakte hai

JsUser.email = "abhay@chatgpt.com"
// Object.freeze(JsUser)//iss object mein ab aage jaakar koi change nahi kar sakte hai
//but agar hum koi change karne ki try karenge toh ye koi error show nahi karega
JsUser.email = "abhay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}// in js function ko hum variables ki tarah treat kar sakte hai
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//for refrence name in object par usse pehle isse strings se backticks mein convert karna hoga
}
console.log(JsUser.greeting);// o/p [Function (anonymous)] function execute nhi hua hai bs uska ek refrence aaya hai
console.log(JsUser.greeting());// Hello JS user

console.log(JsUser.greetingTwo());//Hello JS user, Abhay