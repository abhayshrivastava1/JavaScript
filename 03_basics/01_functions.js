// function matlab humne jo ek set of code likha hai usse ek packet mein band kar diya aur vo jitni baar chahe use kar sakte hai

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}//{} these brackets tells about thw scope of function

// sayMyName// iska matlab hai - function ka refrence o/p - nothing
// sayMyName()// iska matlab hai -function ka execution o/p - written in function


// functions ko initialize karte time jo bhi input lete hai unhe parameters kaha jata hai
// function call ke time jo value function ko dii jaati hai usse kehte hai arguments
// function addTwoNumbers(number1, number2){//number1 and number2 are parameters

//     console.log(number1 + number2);
// }
// addTwoNumbers() //o/p Nan
// addTwoNumbers(3,4) //o/p 7 // 3 and 4 are arguments
// addTwoNumbers(3, "4") //o/p 34
// addTwoNumbers(3, "a") //o/p 3a
// addTwoNumbers(3, null) //o/p 3


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2// another way of writing the sum code
    //return statement ke baad ka koi bhi code execute nhi hoga
}

const result = addTwoNumbers(3, 5)// function return value can be store in a variable

console.log("Result: ", result); 

// o/p without return statement - 
// Result:  8 //ye function ke andar ki console.log statement ke karan aaya hai
// Result:  undefined //  kyunki abhi tak koi value return nhi ki hai function ne

// console.log("Result: ", result); 
//  o/p with return statement
// Result:  8
// Result:  8

// Strict Equality - the strict equality operator always considers operands of different types to be different.

// console.log(1 === 1);
// Expected output: true

// console.log('hello' === 'hello');
// Expected output: true

// console.log('1' === 1);
// Expected output: false

// console.log(0 === false);
// Expected output: false 


// In JS empty string ("") or undefined are considered to be false


function loginUserMessage(username = "sam"){
    if(!username){// equivalent to username === undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("abhay")// o/p - nothing kyunki abhi tak koi print statement nhi likhi hai
// console.log(loginUserMessage("hitesh"))//o/p hitesh just logged in
// console.log(loginUserMessage())// o/p - undefined just logged in


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));