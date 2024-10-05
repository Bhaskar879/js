// Browser object=> Window Object   //Interview question
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="bhaskar"
// user.welcomeMessage()

// console.log(this);      Gives {} in Node But in brower Window object


function chai(){
    console.log(this);

    let username = "hitesh"
    // console.log(this.username);  Can't use "this" in a function    Undefined
     
}
// chai()

const coffee = function(){
    let username = "hitesh"
    console.log(this.username);  //Can't use "this" in a function    Undefined
     
}
// coffee()

// ****************************************************
// Arrow functions
const tea = () => {
    let username = "hitesh"
    console.log(this.username);  //Can't use "this" in a function    Undefined
    console.log(this);
}
// tea()

const addTwo = (num1, num2) => {  //explesite return
    return num1 + num2
}
// console.log(addTwo(2,8))

// OR

const add = (num1, num2) =>  num1 + num2  // implesite return
// console.log(add(5,2));

// const added = (num1, num2) =>  (num1 + num2) 

const adding = (num1, num2) =>  ({username: "hitesh"})  // object return
console.log(adding(5,2));

