// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// pehle bluebird or que vagaira library use hoti thi but ab unko use karne ki jarurat nhi hai kyunki ab humare pass promises aa gaye hai 
// pehle promise ek alag se library thi but ES6 se javascript ke andar hi aati hai 


// Creation of Promise


const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task done');
        resolve()
    }, 1000)
}) // just like new array or new object new promise can be created

promiseOne.then(function(){
    console.log("Promise consumed");
}) // .then ka seedha connection resolve ke saath hai
// .then ke andar jo function hai usme upar se aayi value return hoti hai
// o/p Async task done
// but after connecting resolve and then by adding resolve method in line 15
// o/p Async task done
// Promise consumed

   
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 ");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Abhay", email: "abhay@kv.com"})// iss resolve ke andar hum parameters mein data bhi pass kar sakte hain majority time object hi pass hota hai but yahan par array, function vagaira bhi pass kiya jaa sakta hai
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})// reolve ko then se jodne ke baad hum ye expect karte hain ki function mein koi data aayega

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username: "abhay", password: "1234"})
        }else{
            reject("ERROR went wrong")
        }
    }, 1000)
    // resolve() //ab ye resolve likhne ki jarurat nahi hai kyunki humne pehle hi upar resolve ko call kar liya hai
})

// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// })
// console.log(username); 

// o/p error 
// isme aise return value ko kisi variable mein store karke vale ko nhi nikla sakte

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolve or reject"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "abhay", password: "1234"})
        }else{
            reject("ERROR went wrong")
        }
    }, 1000)
})

// async function consumePromiseFive(){
//     const res = await promiseFive
// }
// o/p error we dont use try catch
//coz async await directly problems ko handle nhi kar sakte hai


// async await thoda wait karta hai kaam ke poora hone ka agar kaam ho jaaye toh hi aage badta hai nahi toh error de deta hai
// reject ka matlab hi error code hai

async function consumePromiseFive(){
    try {
        const res = await promiseFive
        console.log(res);
    }
    catch (error){
        console.log(error);
    }
}
consumePromiseFive()// end mein iss function ko call karna bhi jaruri hai varna error aayegi -> 'ERR_UNHANDLED_REJECTION'

// async function getUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const data = await response.json()
//         console.log(data);
//         // console.log(response); 
//     }
//     catch (error){
//         console.log("E: ",error);
//     }
// }

// getUsers()// abhi getUsers function print nhi hoga kyunki iss mein time lagta hai 

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
    return response.json()
})
.then((data) => {console.log(data)})
.catch((error) => console.log(error))