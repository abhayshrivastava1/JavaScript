// const tinderUser = new Object()// singleton object
const tinderUser = {}// non singleton object rest is same

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// hum aise bahar jaa kar bhi object declare kar sakte hai

// console.log(tinderUser);

const regularUser = { // simple object declaration
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "abhay",
            lastname: "shrivastava"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
//jitne andar tak ki nesting open karni hai utne andar tak dot(.) laga kar jaqa sakte hai

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }// o/p { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2)//o/p { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign(obj1, obj2, obj4)// o/p { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//bina bracket ke saari value object 1 mein jaakar store ho rahi hai

// const obj3 = Object.assign({}, obj1, obj2, obj4)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//ye bracket lagane se saare ke saare objects ek naye empty object mein jaakar store ho gaye

// const obj3 = {...obj1, ...obj2}//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } (mostly used)
//jodne ke pehle unn objects ko kisi new object mein hold karna hoga

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// iss method se saari keys nikal kar unhe ek array mein store kar sakte hai 
// console.log(Object.values(tinderUser));//iss method se saari values nikal kar unhe ek array mein store kar sakte hai 
// console.log(Object.entries(tinderUser));//iss method se saari key-value pair nikal kar unhe alag alag array mein store kar sakte hai 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to chek whether the object has this property or not




// Object Destructuring


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "abhay"
}

// course.courseInstructor//ye less use hota hai isse code thoda messy ho jata hai

const {courseInstructor} = course//o/p abhay another method 
const {courseInstructor: instructor} = course// o/p abhay but iss method se courseInstructor ka naam change hokar instructor ho gaya hai

console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "abhay",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// json - object without any name (javascript object notation)
// ye json ka format hai isme keys aur value dono hi string format mein hoti hai
[
    {},
    {},
    {}
]