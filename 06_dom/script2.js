console.log(document.querySelector('.parent'));
const parent=document.querySelector('.parent');
console.log(parent.children); // o/p this returns a html collection

// console.log(parent.children.innerHTML); // o/p undefined
// console.log(parent.children[0].innerHTML); // o/p Monday

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML); // o/p saare days print ho jayenge
}

parent.children[0].style.color = 'yellow' // o/p monday turned yellow 

console.log(parent.firstElementChild); // o/p first div element Monday
console.log(parent.lastElementChild); // o/p last div element Thursday

const dayOne = document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement); // o/p gives parent element 
console.log(dayOne.nextElementSibling); // o/p sibling element 

console.log("nodes", parent.childNodes); // o/p gives no of nodes in child here 9