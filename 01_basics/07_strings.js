// strings are denoted by both single quotes '' and double "" quotes
const name = "abhay"
const repoCount = 50

console.log(name + repoCount + ' Value');// >> o/p abhay50 value
// this type of syntax is not recommended (outdated)

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // called as string interpolation
// yahan par ${} ko placeholder kehte hai aur unke andar jo bhi variable hai usko seedhe inject sakte hai



// const browserType = "mozilla";
// browserType.length;
// console.log(browserType[0]);// o/p m
// console.log(browserType[browserType.length - 1]);// o/p a
// to retrieve the last character of the string



const gameName = new String('abhay-as-com')// another way of initialize a string
console.log(typeof(gameName))// object 
// here string is object not a array because when we use the new String() constructor, you create a String object

// console.log(gameName[0]);// yahar par string as key value pair store hui hai 
// o - a, 1 - b, 2 - h, and so on...

console.log(gameName.__proto__);// o/p {}  to access prototype
//humme baar baar ye proto likhne ki jarurat nahi hai kuch access karne ke liye

console.log(gameName.__proto__.length);// >> 0
//Here, __proto__ refers to the prototype of the String object. The prototype of String does not have a length property, which is why it returns 0.

console.log(gameName.length);// >> 12 
//This accesses the length property of the actual String object gameName, which correctly returns 12, the number of characters in the string "abhay-as-com".


console.log(gameName.__proto__.toUpperCase());// Here nothing gets print
//This attempts to call toUpperCase() on the prototype of the String object, not on an actual string instance. Since the prototype itself does not hold a string value, it doesn’t make sense in this context. Thus, it won’t return a valid output.

console.log(gameName.toUpperCase());// ABHAY-AS-COM
//This correctly calls the toUpperCase() method on the gameName String object, returning a new string "ABHAY-AS-COM". Importantly, this does not modify the original gameName string because strings are immutable in JavaScript.


// console.log(gameName.toLowerCase());


// console.log(gameName.charAt(1));// kis index par konsa character hai uske liye
// console.log(gameName.indexOf('y'));// kis character ka index konsa hai
// this returns -1 if the character is not present in string



// const newString = gameName.substring(0, 4)
// console.log(newString); // abha

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);// Nothing is printed

const newStringOne = "   abhay    "
console.log(newStringOne);
console.log(newStringOne.trim());

// const url = "https://abhay.com/abhay%20shrivastava"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('abhay'))// o/p true
//to find whether string contains this substring or not


// const browserType = "mozilla";

// if (browserType.startsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }
// No zilla here!


const browserType = "mozilla";

// if (browserType.endsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }
// Found zilla!

// console.log(gameName.split('-'));// [ 'abhay', 'as', 'com' ]

// console.log(gameName.split('')); 
//[
  // 'a', 'b', 'h', 'a',
  // 'y', '-', 'a', 's',
  // '-', 'c', 'o', 'm'
// ]


//  h/w read and perform all string operation of mdn