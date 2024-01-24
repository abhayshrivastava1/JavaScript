// javascript Eecution Context(EC)

// JS EC ka matlab hai ki js kaise kisi file ko run karta hai 
// Js run code in two phase
// Memory Creation Phase (or Creation Phase) (sirf memory create ki jaati hai program ke saare componenets (jaise variable,function) ke liye)
// Execution Phase (iss phase mein program run hota hai)


// there are two execution context 
// (1)global ec  
// (2) functional ec  
// (3) eval ec (property of gec, only required to know name) 

// Sabse pehle ek global execution context banta hai and gec gets refeered to 'this' keyword
// and ec is different in browser and in node 
// in browser it gives windows object 
// and in node it gives empty object {}

let val1 = 10
let val2 = 5
function addnum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)


// Steps of Execution of a program


// (1) Sabse pehle ek global execution(or global environment) context banta hai and gec gets refeered to 'this' keyword


// (2) Memory Phase - isme saare variables ko ikattha kiya jata hai aur unko rakha jata hai

// val1 - undefined
// val2 - undefined
// addnum - defination (kyunki ye ek function hai)
// result1 - undefined
// result2 - undefined


// (3) Execution Phase - 


// sabse pehle val1 aur val2 mein value jayegi 
// val1 - 10
// val2 - 5

// line 3 - 6 ke code ka kuch nhi hoga

// result1 mein ab addnum jana tha but addnum toh ek function hai 
// so ab addnum apna ek alag execution context banata hai
// addnum -> [new variable environment + execution thread}jitni baar bhi function execute hote hai utni baar ek alag new executional context create hota hai
// so ab firse memory creation phase aur execution phase fir se banenge addnum(on line 7) ke liye

// ab iss addnum ke execution context mein

// memory phase - 
// val1 - undefined
// val2 - undefined
// total - undefined

// execution phase -
// num1 - 10
// num - 5
// total - 15 aur ab ye total return ho jayega humare global execution context mein
// aur kaam hone ke baad jo iss naye function ka execution context bana tha ab ye delte ho jayega

// now result1 = 15

// for line 8 again a function call is made so again all these steps are repeated 
// result2 mein ab addnum jana tha but addnum toh ek function hai 
// so ab addnum apna ek alag execution context banata hai
// addnum -> [new variable environment + execution thread}jitni baar bhi function execute hote hai utni baar ek alag new executional context create hota hai
// so ab firse memory creation phase aur execution phase fir se banenge addnum(on line 7) ke liye

// ab iss addnum ke execution context mein

// memory phase - 
// num1 - undefined
// num2 - undefined
// total - undefined

// execution phase -
// num1 - 10
// num - 2
// total - 12 aur ab ye total return ho jayega humare global execution context mein
// aur kaam hone ke baad jo iss naye function ka execution context bana tha ab ye delte ho jayega

// now result2 = 12