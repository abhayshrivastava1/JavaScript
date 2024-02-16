class User{
    constructor(username){
        this.username = username
    }

    log(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor (username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

//The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
//The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
//The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
//The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.


const chai = new Teacher("chai", "chai@teacher.com", "123456")

chai.addCourse() // o/p A new course was added by chai

chai.log()

const masalaChai = new User("masalachai")

masalaChai.log() // o/p username is chai

console.log(chai instanceof User); // true