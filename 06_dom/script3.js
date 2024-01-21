const div = document.createElement('div')
console.log(div); // a div is created
div.className="main" // a class is created
div.id = Math.round(Math.random() * 10 +1) // an id is created
div.setAttribute("title", "generated title")
div.style.backgroundColor = "green"
div.style.padding = "15px"
div.innerText = "Chai Aur Code"

// ye abhi tak ye page par display isliye nhi hua kyunki abhi tak ye sirf memory mein hai page tak nhi aaya hai 
// memory mein tab aayega jab hum document ko bolenege ki issi page par attach toh karo
// className, id, innerText ye sab actually me value ko overwrite karte hai mtlb isme do trip ho jati hai ek baarpurani value ko lekar aata hai (mtlb uska refrence lekar aata hai)aur fir nayi value ko set karta hai 
// jabki set attribute seedha value set karta hai toh isse ek trip bachti hai

const addText = document.createTextNode("Chai Aur Code")
div.appendChild(addText)

document.body.appendChild(div)