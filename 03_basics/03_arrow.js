const user = {
    username: "abhay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);// current context ko refer karne ke liye this keyword use karte hai yahan par user() function current context hai 
        // console.log(this);
    }

}

// context matlab simple values yani values jo aapke variables hold kar rahe hai (matlab kiske baare mein baat ho rahi hai)

// user.welcomeMessage()// o/p abhay , welcome to website
// user.username = "sam"
// user.welcomeMessage()// o/p sam , welcome to website

// console.log(this);// o/p in node {} (an empty object)
// o/p in console(browser) window object kyunki browser mein window object ek global object 

// function chai(){
//     let username = "abhay"
//     console.log(this);// o/p isme toh bahut saari values aayengi
//     console.log(this.username);// o/p undefined kyunki this ko hum kisi function ke andar aise use nhi kar sakte 
// }

// chai()

// const chai = function () {
//     let username = "abhay"
//     console.log(this.username);// o/p undefined reason - this ko hum kisi function ke andar aise use nhi kar sakte 
// }

// arrow function syntax () => {}
const chai =  () => { // function likhne ki jagah agar aise => ka sign banaye toh ye arrow function ban jayega
    let username = "abhay"
    console.log(this);// o/p {}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit return (matlab return keyword likhna pad raha hai)
// }
// console.log(addTwo(3, 4)) // o/p 7


// const addTwo = (num1, num2) =>  num1 + num2 // implicit return(matlab mann liya hai ki yahi line return karni hai)
// console.log(addTwo(3, 4)) // o/p 7


// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4)) // o/p 7

// {} use kiya toh return keyword likhna hoga but agar () use kiya toh return nahi likhna hai

// const addTwo = (num1, num2) => {username: "abhay"} // o/p undefined kyunki object ko aise return hi nahi kar sakte 
// const addTwo1 = (num1, num2) => ({username: "abhay"}) // o/p username: "abhay" object ko return karne ke liye usko () mein wrap karna hi hota hai


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()