// defer tag ko use karna bahut jaruri hai bina defer tag use kare browser(edge) dom ko html code se link nhi karega aur kuch bhi show nhi hoga ya null ya error aayegi


console.log(document.getElementById("title")) // o/p uss id ka sara html code

console.log(document.getElementById("title").id) // o/p title

console.log(document.getElementById("title").className); // o/p tree

console.log(console.log(document.getElementById('title')));// o/p single inverted commas use karne se ek undefined bhi saath mein print hoga 

console.log(document.getElementById("title").getAttribute) // o/p return a function

console.log(document.getElementById("title").getAttribute('id')) // o/p title isme single aur double commas se koi farak nahi padta 

console.log(document.getElementById("title").setAttribute('class', 'test')) // o/p undefined // ye usko overwrite karke uske andar test ko as class set kar dega

console.log(document.getElementById("title").setAttribute('class', 'test heading')) // o/p undefined // ab test aur heading dono set ho gaye hai as class

// const titles = console.log(document.getElementById("title")) 

// titles.style.backgroundColor = 'green' // yahan par error aa rahi hai //Cannot read properties of undefined (reading 'style')
// yeh error tab bhi aa raha hai jab issi code ko browser ke console par try karenge
// yeh saari error iss liye aa rahi hai kyunki maine isme galti se title mein ek console.log statement store kar dii

const titles = document.getElementById("title") // ab yeh thik se work karega
// titles.style.backgroundColor = 'green'// isse content green ho jayega


// intresting part (content addition and removal)

console.log(titles.innerText) // o/p This is an id element

console.log(titles.textContent) //o/p This is an id element test text

console.log(titles.innerHTML) // o/p This is an id element <span style="display: none;">test text</span>

console.log(document.getElementsByClassName('heading')); // a html collection is returned 

console.log(document.querySelector('h2')); // o/p isse sbse pehle wala h2 print ho jayega 

const titque = document.querySelector

console.log(titque);

// titque('.title') // o/p error //illeagal invocation 

console.log(titque.title);// o/p undefined hi aayega chahe title ya fir heading ya kuch aur find karo

console.log(document.querySelector('#title')); //o/p poori h1 aa jayegi

console.log(document.querySelector('input')); // o/p poori input vali line
console.log(document.querySelector('input[type="password"]')); // o/p poori input vali line

console.log(document.querySelector('ul'));// o/p first ul is selected

const myul=document.querySelector('ul')

const li1=myul.querySelector('li')// o/p first li is selected 

// li1.style.backgroundColor="green"

// li1.innerText="five" // o/p one becomes five

console.log(document.querySelectorAll('ul'));// o/p a nodelist returns

console.log(tempList = document.querySelectorAll('ul'));
tempList[0].style.backgroundColor = 'blue'// p/p whole ul becomes blue 

console.log(tempList1 = document.querySelectorAll('li'));
tempList1[1].style.color = 'green' // two becomes green 

const liitem=document.getElementsByClassName('listItem')
console.log(liitem); // it returns a html collection

Array.from(liitem)// o/p isse ye array me convert toh ho jayega but agar hum isse kisi mein hold nhi karenge toh ye vapis html collection ban jayega

console.log( typeof liitem);// o/p object 
// ye ek html collection hai

const newArray = Array.from(liitem)
console.log(newArray); // now this is an array