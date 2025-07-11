// {} denotes scope when {} comes with function/if-else then this is called scope
//dont confuse it with curly brackests of objects they are different used for object declaration


var c = 300
let a = 300

if (true) { // inn curly braces ke andar jo values hai local scope ki hai aur inhe scope ke bahar available nahi hona chahiye
    let a = 10
    const b = 20
    var c = 30
    d = 40
    // console.log("INNER: ", a);// o/p 10
    
}

// console.log(a);// o/p a is not defined if line 6 let a = 300 was not written 
// if written then o/p 300
// console.log(b);// o/p b is not defined
// console.log(c);// o/p 30 but 300 aana chahiye tha
// console.log(d);// ** agar mein var nhi likhta hoon tab bhi yahi problem aayegi means o/p 40


//Global Scope node(matlab code environment jaise vsc) mein aur console(browser) mein different hota hai

 
// Nested Scope


function one(){
    const username = "abhay"

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    // console.log(website);// website is not defined

    two() 
    //ye two() tab tak execute nhi hoga jab tak one() pehle kahin bahar call hoga
    // compiler code compile karte time sirf iss code ko read karega aur two() ko execute nahi karega two() sirf tabhi execute hoga jab one() pehle kahin bahar call hoga

}

one()// ab iss call ke baad hi two() excecute hua hai

if (true) {
    const username = "abhay"
    if (username === "abhay") {
        const website = " youtube"
        // console.log(username + website); //o/p abhay youtube
    }
    // console.log(website); //o/p website is not defined
}

// console.log(username); //o/p username is not defined 





// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))// o/p 6

function addone(num){
    return num + 1
}
// Yahaan addone() ek function declaration hai.

// JavaScript execution ke pehle phase (memory creation phase) me function declarations ko fully hoist kar diya jata hai.

// Matlab: pura function memory me load ho jata hai pehle se, isliye aap usse pehle bhi call kar sakte ho.



// addTwo(5) // o/p addTwo() is not defined ye problem depend karti hai jis tarah se hum function declare karte hai mini concept hoisting
const addTwo = function(num){ // this variable is called expression
    return num + 2
}

// Yahaan addTwo ek function expression hai — aur woh ek const variable me assign hua hai.

// Memory creation ke dauraan JavaScript sirf addTwo naam ka variable banata hai, lekin usko undefined assign karta hai (ya agar let/const ho, to usse TDZ me daal deta hai).

// Function ka actual value (function expression) assign runtime ke dauraan hota hai — jab code uss line tak pahuchta hai.

// Agar aap uske pehle usse call karte ho, to error milta hai.



// Final Answer 

// addone() chal raha hai kyunki wo function declaration hai, aur JavaScript hoisting usse memory me upar le jaata hai.

// addTwo() error de raha hai kyunki wo ek function expression hai jo const me assign hai, aur hoisting me sirf variable banega — function runtime pe assign hota hai, isliye call se pehle undefined ya TDZ me hota hai.


// javascript mein variable kuch bhi hold kar sakte hai like json value, function