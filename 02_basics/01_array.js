// array
// Always written in brackets []

// () Paranthesis
// [] Brackets
// {} Braces

//In js arrays are resizable
const myArr = [0, 1, 2, 3, 4, 5]// in JS element may be of different data type 
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); zero based indexing is present
// During copying array is js make shallow copy (call by refrence type)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() //last value ko remove kar denge

// myArr.unshift(9)// isme dii gayi value array ki start mein jaakar shift ho jayegi
// myArr.shift()// isme bilkul start vali value delete kar denge

// console.log(myArr.includes(9));// gives either true or false if element present -> true else false
// console.log(myArr.indexOf(3));if element not present -> -1 if present -> jahan par bhi element hoga

// const newArr = myArr.join()//array ko join karke string mein convert kar deta hai

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//Returns a copy of a section of an array jisme last end limit excluded hai 
//isme original array mein koi change nahi hota hai 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//Remove elements from given range 
//isme original array bhi change ho jati hai removed element original array se bhi delete ho jate hai 
console.log("C ", myArr);
console.log(myn2);