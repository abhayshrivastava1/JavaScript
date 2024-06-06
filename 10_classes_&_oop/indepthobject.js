// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// o/p 
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

 
// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,
// }

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// o/p
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }


// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,
// }

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: true,
    
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//o/p
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: true,
//     configurable: true
//   }


// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,

//     orderChai: function(){
//         console.log("code fat gaya");
//     }
// }

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);
// }
// o/p 
// name : ginger chai
// price : 250
// isAvailable : true
// orderChai : function(){
//         console.log("code fat gaya");
//     }



// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,

//     orderChai: function(){
//         console.log("code fat gaya");
//     }
// }

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
        
//         console.log(`${key} : ${value}`);
//     }
// } 
// o/p 
// name : ginger chai
// price : 250
// isAvailable : true



const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
}

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') 
    { 
        console.log(`${key} : ${value}`);
    }
} 
// o/p if enumerable : false
// price : 250
// isAvailable : true

// o/p if enumerable : true
// name : ginger chai
// price : 250
// isAvailable : true