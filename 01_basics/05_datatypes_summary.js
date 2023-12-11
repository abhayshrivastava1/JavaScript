// categorization of datatype is based upon how data is stored and how data is accessed
// Javascript is a dynamically typed language
//  Primitive Type- Ye saare call by value hote hai

// 7 types : 
// String, 
// Number, 
// Boolearn, 
// null(iska matlab empty hota hai naa ki 0), 
// undefined(variable declare ho gaya hai but value kya hogi vo decide nahi hai), 
// Symbol(kisi bhi value ko unique banane ke liye use hota hai), 
// BigInt(bahut jyada badi value isme store hoti hai)


const score = 100
const scoreValue = 100.3 // ye bhi number hai

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false 
// kyunki symbol ka kaam hi unique banane ke liye hota hai

// const bigNumber = 3456543576654356754n // end mein n lagane se ye bigint ban jayega

console.log(typeof anotherId); // symbol
console.log(typeof scoreValue);// number
console.log(typeof isLoggedIn);// boolean
console.log(typeof outsideTemp);// object
console.log(typeof userEmail);// undefined

// Reference (Non primitive)- Memory mein inka refernce directly allocate kiya jaa sakta hai

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
// functions ko javascript mein ek variable ki tarah bhi treat kar sakte hai

console.log(typeof myFunction);// o/p function  par isko object function kehte hai
console.log(typeof myObj);// object

console.log(typeof null);// object
console.log(typeof undefined);// undefined


// https://262.ecma-international.org/5.1/#sec-11.4.3
