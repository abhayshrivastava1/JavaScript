// const score = 400
// console.log(score);// >> o/p 400


// hello= 'hello';
// const balance = Number(hello);
// console.log(balance);  // o/p NaN
// This is a function that converts its argument to a number type. If the argument cannot be converted to a valid number, it returns NaN.

// const balance = new Number(100)
// console.log(balance);// >> o/p [Number: 100]
// This creates a Number object, which wraps the numeric value. Even if the argument is not a valid number, it will create an object that still represents that invalid number.
// agar yahan par koi aur datatype denge toh ye NaN return karega

// console.log(balance.toString().length);// o/p 3
// console.log(balance.toFixed(3));// o/p 100.00

// const otherNumber = 123.8966
// console.log(otherNumber.toFixed(3));// o/p 123.897

// console.log(otherNumber.toPrecision(4));// o/p 123.9
// console.log(otherNumber.toPrecision(3));// o/p 124
// console.log(otherNumber.toPrecision(5));// o/p 123.90


// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // o/p 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);// o/p Object [Math] {}

// console.log(Math.abs(-4.9));// o/p 4.9 isse sirf negative value positive hongi but not viceversa
console.log(Math.round(4.6));// o/p 5
// console.log(Math.ceil(4.2));//o/p 5 isme upar value hi choose hogi
// console.log(Math.floor(4.9));//o/p 4 isme neeche vali value hi hi choose hogi
// console.log(Math.min(4, 3, 6, 8)); 
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());// isse koi bhi ek random value generate hogi 0 aur 1 ke beech ki (both included)
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// h/w read all function of math library 