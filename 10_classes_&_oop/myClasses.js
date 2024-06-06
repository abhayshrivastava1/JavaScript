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



// class ClassName {
//     constructor(parameters) {
//       // Constructor function for initializing objects
//       this.property1 = value1;
//       this.property2 = value2;
//       // ...
//     }
  
//     // Methods
//     methodName1() {
//       // Method definition
//     }
  
//     methodName2() {
//       // Method definition
//     }
  
//     // Static methods
//     static staticMethodName() {
//       // Static method definition
//     }
//   }
//   Let's break down the components:
  
//   class keyword: It's used to define a new class.
  
//   ClassName: This is the name of your class.
  
//   constructor(): This method is a special method for creating and initializing objects created with a class. It's called automatically when an instance of the class is created.
  
//   this: Within the constructor and methods of the class, this refers to the current instance of the class. You use it to access properties and methods of the current object.
  
//   methods: These are functions defined within the class. They define behaviors associated with the class.
  
//   static: This keyword defines a static method for the class. Static methods are called on the class itself rather than on instances of the class.