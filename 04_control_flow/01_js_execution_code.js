// javascript Eecution Context(EC)

// JS EC ka matlab hai ki js kaise kisi file ko run karta hai 
// Js run code in two phase
// Memory Creation Phase (or Creation Phase)
// Execution Phase


// there are two execution context 
// (1)global ec  
// (2) functional ec  
// (3) eval ec (property of gec, only required to know name) 

// Sabse pehle ek global execution context banta hai and gec gets refeered to 'this' keyword
// and ec is different in browser and in node 
// in browser it gives windows object in node it gives empty object {}

let val1 = 10
let val2 = 5
function addnum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)


// (1) Sabse pehle ek global execution context banta hai and gec gets refeered to 'this' keyword


// (2) Memory Phase -isme saare variables ko ikatha kiya jata hai aur unko rakha jata hai
// val1 - undefined
// val2 - undefined
// addnum - defination
// result1 - undefined
// result2 - undefined
