// Dates

let myDate = new Date()
// console.log(myDate.toString());
console.log(myDate.toISOString);
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);// date is a object in js


// H/W to ke saath vale saare function ek baar run karne hai khud se ctrl+space se aa jayenge




let myCreatedDate = new Date(2023, 0, 23)// month 0 se shuru hote hai means january = 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)


// let myCreatedDate = new Date("2023-01-14") // jab dd mm yy karenge toh month first se start hoga means january = 1 
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()// ye ek millisecond value return karega

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());// ye bhi ek millisecond value dega
// console.log(Math.floor(Date.now()/1000));// vo millisecond value second mein convert ho jayegi

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);// to get month
console.log(newDate.getDay());// to get day

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {  //isme pehle ek internal format dena padta hai vo bhi string mein and here 'default'
    weekday: "long",// date ek object hai so iske andar kuch parameter bhi likhe jaa sakte hai that we written here weekday vo bhi kayi formats mein ctrl+space
                    // iske baad bhi kayi aur DIY      
    
})
