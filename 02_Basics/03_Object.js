// singleton

// Object.creat

// object literals

const mySym = Symbol("key1")

const JUser = {
    name: "Bhaskar",
    "full name": "Bhaskar Ruidas",  // accessable by console.log(JUser["full name"])    Not  .  Operator
    age: 18,
    [mySym] : "myKey1",  // Symbol type
    location: "Asansol",
    email: "bhaskar@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}
// console.log(JUser.name)  // Use this syntax
//OR
// console.log(JUser["name"]) // For Interview Question
// console.log(JUser["full name"])
// console.log(JUser[mySym])  //Symbol access "" not required

JUser.email = "shanjay@gmail.com"
// Object.freeze(JUser) //freezed
// console.log(JUser)

JUser.greeting = function(){
    console.log("Hello JUser")
}

JUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}

// console.log(JUser.greeting)   //[Function (anonymous)]
// OR
console.log(JUser.greeting())
console.log(JUser.greetingTwo())