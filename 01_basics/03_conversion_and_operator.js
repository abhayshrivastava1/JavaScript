let score = "abhay"

// console.log(typeof score);
// console.log(typeof(score));// as method

let valueInNumber = Number(score) // isse pehle chahe koi bhi type ho but ab score ek number hai
console.log(typeof "33abc");
console.log(valueInNumber);// yahan par humne koi value nahi di thi so, o/p NaN


// "33" => 33 // treated as string
// "33abc" => NaN //In JavaScript, when you try to convert a string to a number using Number(), it only succeeds if the entire string represents a valid number. If there are any non-numeric characters (like "33abc"), JavaScript cannot interpret it as a number and instead returns NaN (Not a Number).
//  true => 1; false => 0

let isLoggedIn = "abhay"
let isLoggedIn1 = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn); // o/p true kyunki agar string mein koi value hogi toh vo true consider ki jayegi

console.log(booleanIsLoggedIn1)// o/p false kyunki agar string mein koi value nahi hogi toh vo false consider ki jayegi

// 1 => true; 0 => false
// "" => false
// "abhay" => true

let someNumber = 33

let stringNumber = String(someNumber)// ab ye number string mein convert ho gaya hai
 console.log(stringNumber); 
 console.log(typeof (stringNumber));

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);// -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " abhay"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // o/p 122 
// console.log(1 + 2 + "2"); // o/p 32
// agar string first hai toh sabhi ko string ki tarah treat kiya jayega aur 
//agar string last mein hai toh pehle addition ho jayega then converted to string


// console.log( (3 + 4) * 5 % 3);

console.log(+true); //o/p 1 kyunki true means 1 hota hai aur (+1) or (1) ek hi cheez hai
console.log(+""); // o/p 0 kyunki empty string represents 0 aur (+0) or (0) ek hi cheez hai aur 0 ka mtlb false hota hai

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100

gameCounter++; //101
++gameCounter; //101
console.log(gameCounter); // o/p 102

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion