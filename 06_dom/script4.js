function addLang(lang){
    const li = document.createElement('li')
    li.innerHTML= `${lang}`
    document.querySelector(".language").appendChild(li)
} 
// iss method se language add toh ho jayegi but isme baar baar poori tree ko traverse karna padega kyunki isme bilkul end mein jaa kar append ho raha hai
addLang("Python")

function addOptiLang(lang){
    const li = document.createElement('li')
    const add=document.createTextNode(lang)
    li.appendChild(add)
    document.querySelector('.language').appendChild(li)// yahan par humne queryselector ko isliye use kiya kyunki humare pass uss element ka refrence nhi tha 
}
addOptiLang("Rust")
addOptiLang('Typescript')

// Edit


const Lang = document.querySelector("li:nth-child(0)")
console.log(Lang);// prints null 


const seLang=document.querySelector("li:nth-child(3)")// isse poora li select ho gaya Rust ka
console.log(seLang);

// seLang.innerHTML = "Mojo" // not an optimized approach

// console.log(seLang.textContent = "Mojo1");// o/p ye method bhi use kar sakte hai isse bhi same result hi aayega

// seLang.innerText = "Mojo" // o/p ye method bhi use kar sakte hai isse bhi same result hi aayega

const newLi = document.createElement("li")
newLi.textContent = "Mojo"
seLang.replaceWith(newLi)// yahan par humare pass refrence hai element ka so isliye humne replacewth use kiya queryselector ki jagah 

// Edit


const thirdLang = document.querySelector("li:nth-child(1)")
console.log(thirdLang); // isse poora li select ho gaya Javascript ka

thirdLang.outerHTML = '<li>Java</li>'// another way of changing


// Remove

const lastLang = document.querySelector('li:last-child')
lastLang.remove() // lastlang (Typescript) is removed 
