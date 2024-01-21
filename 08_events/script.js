// events hamesha sequentially run hote hai 
// every movement is an event click,hover,type all this are event 

// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }// this is also not a good approach as onclick does not give property of propagation

// attachEvent (used for internet explorer)
// jQuery - on (on is used inplace of eventListner) 


// Event Listner (best approach)

// document.getElementById('owl').addEventListener('click', function(){
//     alert("owl clicked again")
// })


document.getElementById('owl').addEventListener('click', function(e){
    console.log(e);
},false)
  
// HW - Read about these 
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


// Event Bubbling 

document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul");
},false)

document.getElementById('owl').addEventListener('click', function(e){
    console.log("clicked inside the owl");
},false)

// o/p 
// clicked inside the owl 
// clicked inside the ul 
// prints in above order kyunki yahan par event bubbling ho rahi hai yani neeche se upar jaa raha hai



// Event Capturing


document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul");
},true)

document.getElementById('owl').addEventListener('click', function(e){
    console.log("clicked inside the owl");
},true)

// o/p 
// clicked inside the ul
// clicked inside the owl
// prints in above order kyunki yahan par event capturing ho rahi hai yani neeche se upar jaa raha hai


// true false 

// o/p -> clicked inside the ul
// clicked inside the owl

// false true

// o/p -> clicked inside the owl
// clicked inside the ul


document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul");
},false)

document.getElementById('owl').addEventListener('click', function(e){
    console.log("clicked inside the owl");
    e.stopPropagation()
},false)

// o/p clicked inside the owl 
// isme owl ke aage nahi hua propagation


document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault()
    e.stopPropagation()
    console.log("Google clicked");
},false)

// o/p Google clicked

// Deleting a image



document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    let removeImg = e.target.parentNode
    
    removeImg.remove()

    // Another way
    // remove.parentNode.removeChild(remove)
}) // but this has a problem all images been removed when we click on li other than image




document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeImg = e.target.parentNode
        removeImg.remove()
    }
})