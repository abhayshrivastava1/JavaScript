class user {
    constructor(usernmae){
        this.usernmae = usernmae
    }
    logMe(){
        console.log(`ussername is ${this.usernmae}`);
    } 

    static createId(){
        return `123`
    }
}

const abhay = new user("Abhay")
// console.log(abhay.createId()); // before using static 123, after using static this returns an error coz now we cant access createid from outside

//The static keyword defines a static method or field for a class, or a static initialization block (see the link for more information about this usage). Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
//Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

class Teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

iphone.logMe() // ussername is iphone
console.log(iphone.logMe()); // o/p ussername is iphone undefined bhi saath mein aayega coz logMe pehle hi ek baar print kar raha hai
// console.log(iphone.createId());