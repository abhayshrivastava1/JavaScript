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
// here string is object not a array

// console.log(gameName[0]);// yahar par string as key value pair store hui hai 
// o - a, 1 - b, 2 - h, and so on...

// console.log(gameName.__proto__);// o/p {}  to access prototype
//humme baar baar ye proto likhne ki jarurat nahi hai kuch access karne ke liye

// console.log(gameName.__proto__.length);// >> 0
console.log(gameName.length);// >> 12 
//pata nahi answer kyu alag aa raha hai

console.log(gameName.__proto__.toUpperCase());//
console.log(gameName.toUpperCase());// 
// yahan par original string change nhi hui hai
//isme bhi proto aur aur uski agli line ka asnswer alag hai idk??


// console.log(gameName.toLowerCase());


// console.log(gameName.charAt(1));// kis index par konsa character hai uske liye
// console.log(gameName.indexOf('y'));// kis character ka index konsa hai
// this returns -1 if the character is not present in string



// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   abhay    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://abhay.com/abhay%20shrivastava"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('abhay'))// o/p true
//to find whether string contains this substring or not


const browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}


// const browserType = "mozilla";

// if (browserType.endsWith("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }

// console.log(gameName.split('-'));




//  h/w read and perform all string operation of mdn