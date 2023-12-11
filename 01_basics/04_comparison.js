// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// upar vale sab me common sense vala answer aayega

// console.log("2" > 1); >> true
// yahan par "2" number mein convert ho gaya 
// console.log("02" > 1); >> true
// yahan par "02" number mein convert ho gaya 

// Kabhi kabhi ye unpredictable result deta hai toh jab bhi compare karna hai toh ye pehle hi pakka kar lo ki datatype same ho

console.log(false  > 0);// >> false
console.log(false == 0);// false
console.log(false >= 0);// >> true
// == equality operator worked different from >< <= >= comparison operator comparison converts null to a number treating it as 0
// thats why (3) is true while (1) is false

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// result hamesha false hi aayega

// Different datatype comparison normally nhi karni chahiye these are not clean code


// === 

// console.log("2" === 2);// >> false
// kyunki ye datatype bhi check karta hai