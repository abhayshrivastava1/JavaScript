// Immediatly Invoked Function Expression

// iife ka use isliye karte hai jisse humara function kisi bahar vale global scope ke karan kharab naa ho jaaye 
// aur jab ye ()paranthesis laga dete hai toh ek block ban ata hai jisse ye global scope ke karan pollute nhi hota (just like in last lecture)

// function chai(){
//     console.log('DB connected');
// }() // o/p unecpected token ()


// (function chai(){
//     console.log('DB connected');
// })() // o/p DB connected


// (function chai(){
//     console.log('DB connected');
// })() // o/p DB connected

// (function chai(){
//     console.log('DB connected');
// })() //o/p (intermediate value)(...) is not a function 
// yahan par iffe ko nahi pata ki context rokna kahan par hai javascript mein humme uss line ko end karna padta hai

// (function chai(){
//     console.log('DB connected');
// })() // o/p DB connected

// (function chai(){
    //named iife
//     console.log('DB connected');
// })(); // o/p DB connected

( () => {
    console.log('DB connected');
})(); //o/p // o/p DB connected 
// // agar upar semicolon(;) nahi lagayenge toh error aayegi - (intermediate value)(...) is not a function 



( (name) => {
    console.log(`DB connected ${name}`);
} )('abhay')





