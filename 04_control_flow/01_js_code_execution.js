// javascript Eecution Context(EC)

// JS EC ka matlab hai ki js kaise kisi file ko run karta hai 
// Js run code in two phase
// Memory Creation Phase (or Creation Phase) (sirf memory create ki jaati hai program ke saare componenets (jaise variable,function) ke liye)
// Execution Phase (iss phase mein program run hota hai)


// there are two execution context 
// (1) global ec  
// (2) functional ec  
// (3) eval ec (property of gec, only required to know name) 


// Sabse pehle ek global execution context banta hai and gec gets refeered to 'this' keyword
// and ec is different in browser and in node 
// in browser it gives windows object 
// and in node it gives empty object {}


let val1 = 10  // line 1
let val2 = 5  // line 2
function addnum(num1,num2){   // line 3
    let total = num1 + num2  // line 4
    return total            // line 5
}                          // line 6 
let result1 = addnum(val1,val2)    // line 7
let result2 = addnum(10,2)        // line 8


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
// addnum -> [new variable environment + execution thread} jitni baar bhi function execute hote hai utni baar ek alag new executional context create hota hai
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
// aur kaam hone ke baad jo iss naye function ka execution context bana tha ab ye delete ho jayega

// now result1 = 15

// for line 8 again a function call is made so again all these steps are repeated 
// result2 mein ab addnum jana tha but addnum toh ek function hai 
// so ab addnum apna ek alag execution context banata hai
// addnum -> [new variable environment + execution thread} jitni baar bhi function execute hote hai utni baar ek alag new executional context create hota hai
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



// Flowchart


/*

┌──────────────────────────────┐
│  Program Start               │
└────────────┬─────────────────┘
             │
             ▼
┌──────────────────────────────┐
│  (1) Global Execution Context│
│      (GEC Created)           │
│  this → window (browser)     │
└────────────┬─────────────────┘
             │
             ▼
┌──────────────────────────────┐
│  (2) Memory Creation Phase   │
│                              │
│  val1     → undefined        │
│  val2     → undefined        │
│  addnum   → function (ref)   │
│  result1  → undefined        │
│  result2  → undefined        │
└────────────┬─────────────────┘
             │
             ▼
┌──────────────────────────────┐
│  (3) Execution Phase         │
│                              │
│  val1 = 10                   │
│  val2 = 5                    │
└────────────┬─────────────────┘
             │
             ▼
┌──────────────────────────────┐
│  Line 7 → result1 = addnum() │◄──────────────────────────────┐
└────────────┬─────────────────┘                               │
             ▼                                                 │
  ┌─────────────────────────────────────────────┐              │ 
  │  New Functional Execution Context (FEC)     │              │
  └────────────────┬────────────────────────────┘              │
                   ▼                                           │
     ┌────────────────────────────┐                            │
     │ Memory Phase of addnum()   │                            │
     │ num1 → undefined           │                            │
     │ num2 → undefined           │                            │
     │ total → undefined          │                            │
     └────────────┬───────────────┘                            │
                  ▼                                            │
     ┌────────────────────────────┐                            │
     │ Execution Phase of addnum()│                            │
     │ num1 = 10                  │                            │
     │ num2 = 5                   │                            │
     │ total = 15                 │                            │
     │ return total (15)          │────────────────────────────┘
     └────────────────────────────┘
             │
             ▼
  result1 = 15 (Back in GEC)
             │
             ▼
┌──────────────────────────────┐
│ Line 8 → result2 = addnum()  │◄──────────────────────────────┐
└────────────┬─────────────────┘                               │
             ▼                                                 │
  ┌─────────────────────────────────────────────┐              │
  │  New Functional Execution Context (FEC)     │              │
  └────────────────┬────────────────────────────┘              │
                   ▼                                           │
     ┌────────────────────────────┐                            │
     │ Memory Phase of addnum()   │                            │
     │ num1 → undefined           │                            │
     │ num2 → undefined           │                            │
     │ total → undefined          │                            │
     └────────────┬───────────────┘                            │
                  ▼                                            │
     ┌────────────────────────────┐                            │
     │ Execution Phase of addnum()│                            │
     │ num1 = 10                  │                            │
     │ num2 = 2                   │                            │
     │ total = 12                 │                            │
     │ return total (12)          │────────────────────────────┘
     └────────────────────────────┘
             │
             ▼
   result2 = 12 (Back in GEC)
             │
             ▼
       🔚 Program Ends






Key Points Recap:


JavaScript sabse pehle Global Execution Context (GEC) banata hai.

GEC ke andar sab kuch do phases me hota hai:

Memory Phase (sab cheez ko undefined set karta hai)

Execution Phase (actual value assign hoti hai)

Jab bhi function call hota hai, ek naya Execution Context banta hai.

Function context ke andar bhi do phases hote hain.

Function complete hone ke baad, uska context delete ho jata hai aur control wapas Global EC me aa jata hai.


*/