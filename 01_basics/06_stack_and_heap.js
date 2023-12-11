// Stack (Primitive), Heap (Non-Primitive)

let myNmae = "Abhay"

let anotherName = myNmae // iss line mein anotherName ko myName ki value nahi dii jati but uski ek copy dii jati hai
// aur humne copy mein change kiya hai toh change copy mein hi hoga naa ki original value meim
anotherName = "Shrivastava"

// console.log(myNmae);
// console.log(anotherName);


let user1 = {
    email: "abhay@google.com",
    school: "KV"
}

let user2 = user1// yahan par original value ka refrence diya jata hai toh 
//agar user2 mein koi change kiya jayega toh vo change user1 mein bhi dikhega

user2.school = "nitj"

console.log(user1.email)
console.log(user1.school)