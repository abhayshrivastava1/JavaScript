// const accountId = 144553 //ab isko change nahi kiya jaa sakta constant ko declare karne ka yahi ek tarika hai

var accountPassword = "12345"// var ke saath scope vali problem hai 
//mtlb isme scope define nahi hai jaise ki agar mein kisi aur scope mein accountPassword variable use karunga aur uski value change karunge toh yeh vali value bhi change ho jayegi irrespective of scope 

let accountEmail = "hitesh@google.com"// var vali problem solve karne ke liye humne let use karna start kar diya
accountCity = "Jaipur"// another way of declaring variables
let accountState; // o/p undefined

accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) //isse sara data ek tabular structure mein print ho jayega