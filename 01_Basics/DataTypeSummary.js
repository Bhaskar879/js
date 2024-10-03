// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100     //number
const scoreValue = 100.3  //number

const isLoggedIn = false  //boolean
const outSideTemp = null   //null,  mean empty
let userEmail;  //undefined,  mean not defined , means declare only

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id);
// console.log(id === anotherId);

const bigNumber = 2938458365823439n
// console.log(bigNumber)

// Reference (Non-Primitive)

// Array, Object, Function

const heros = ["bhaskar", "shanjay", "Bhola"];
let myObj = {
    name: "Bhaskar",
    age: 21,
}

const myFunction = function () {
    console.log("Hello world!");
}

// console.log(typeof bigInt); //undefined
// console.log(typeof outSideTemp);  //object
// console.log(typeof scoreValue);
// console.log(typeof anotherId);

// console.log(typeof myFunction); //Non-Primitive always object*
// console.log(typeof heros);
// console.log(typeof myObj);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory----
// Stack (Primitive)               means gets copy of it (Original value not changes)

let myYoutubeChannel = "EarthHuman"
let anotherChannel = myYoutubeChannel
anotherChannel = "Bhaskar"

console.log(myYoutubeChannel);
console.log(anotherChannel);

//Heap (Non-Primitive)         means gets reference (Original value changes)
let userOne = {
    email: "bhaskar@gmail.com",
    upi: "bhaskar@rapl"
}
let userTwo = userOne;

userTwo.email = "guglu@gmail.com"

console.log(userOne.email); //"guglu@gmail.com"
console.log(userTwo.email); //"guglu@gmail.com"