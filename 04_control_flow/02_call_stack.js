// function one(){
//     console.log("one");
    
// }
// function two(){
//     console.log("two");
    
// }
// function three(){
//     console.log("three");
// }

// one()
// two()
// three()

// o/p 
// one
// two
// three





function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
}

// one()
two()
// three()

// sabse pehle execution jayega one() par

// so call stack for one() 
// three
// two
// one
// gec

// individual output
// one
// two
// three


// so call stack for two()
// three
// two
// gec

// individual output
// two
// three


// so call stack fr three()
// three

// individual output
// three



// combined o/p -
// one
// two
// three
// two
// three
// three