// we are talking about js after es6

// classes is still a syntactical sugar above prototype

// class user{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     } // jaise hi class se koi object initialize hoga ek constructor call hoga

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const ab = new user("Coffe", "cofee@gmail.com", "123456")

// console.log(ab.encryptPassword()); // o/p 123456abc 

// console.log(ab.changeUsername()); // o/p COFFE


// Behind the scene


class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    } // jaise hi class se koi object initialize hoga ek constructor call hoga
}
    user.prototype.encryptPassword = function(){
        return `${this.password}abc`
    }

    user.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`
    }



const ab1 = new user("chai", "chai@gmail.com", "123456")

console.log(ab1.encryptPassword()); // o/p 123456abc 

console.log(ab1.changeUsername()); // o/p CHAI

