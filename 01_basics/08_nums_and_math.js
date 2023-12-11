// const score = 400
// console.log(score);// >> o/p 400

// const balance = new Number(100)
// console.log(balance);// >> o/p [Number: 100]
// agar yahan par koi aur datatype agar denge toh ye NaN return karega

// console.log(balance.toString().length);// o/p 3
// console.log(balance.toFixed(3));// o/p 100.00

// const otherNumber = 123.8966
// console.log(otherNumber.toFixed(3));// o/p 123.897

// console.log(otherNumber.toPrecision(4));// o/p 123.9
// console.log(otherNumber.toPrecision(3));// o/p 124
// console.log(otherNumber.toPrecision(5));// o/p 123.90


// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4.9));// o/p 4.9 isse sirf negative value positive hongi but not viceversa
// console.log(Math.round(4.6));// o/p 4
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