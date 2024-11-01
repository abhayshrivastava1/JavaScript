const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)//ismr dc_heros array as a element marvel_heros vali array mein insert ho jayegi

// console.log(marvel_heros); //[, , ,[, , ,]]
// console.log(marvel_heros[3][1]);// o/p flash

// const allHeros = marvel_heros.concat(dc_heros)// concat mein ek variable bhi dena hota hai jisme new array store hogi
// console.log(allHeros);[, , , , , , ]

const all_new_heros = [...marvel_heros, ...dc_heros]// ...spread operator it spreads all the elements of array isme jitni chahe utni arrays add kar sakte hai
// ab vo array nahi raha ab uska har ek element indivdual ho gaya hai aur comma( , ) use karke humne saare individual elemnts ko jod diya hai 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//isme saare array elements spread out ho chuke hai aur ek individual elemnts ki tarah ek array mein jaa chuke hai
console.log(real_another_array);



console.log(Array.isArray("Abhay"))// returns ki given data array hai ya nahi
console.log(Array.from("Abhay"))//o/p [ 'A', 'b', 'h', 'a', 'y' ] converts given data into array
console.log(Array.from({name: "abhay"})) // o/p [] yahan par ye isko convert nahi kar paya 
//for conversion we must have to clarify whether make keys into array or value into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //o/p [ 100, 200, 300 ] given set of elements ko array mein convert kar dega

// h/w learn array.is from of more