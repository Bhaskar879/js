

function callMyName() {
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
    console.log("E")
}
// callMyName()

function addTwoNumbers(num1, num2){    //3 type we can write
    // console.log(num1+num2)      //const result = addTwoNumbers(3,5)         result=Undefined

    // let result = num1 + num2
    // return result

    // return num1 + num2

}

const result = addTwoNumbers(3,5)    
// console.log("Result: ",result)  

function loginUserMessage(username){
    if(username === undefined){   //OR (!username)
        console.log("Please enter your username")
        return   //after return no line will be executed
    }
    return `${username} just loged in`
}
// console.log(loginUserMessage())   //when no parameter() then Undefined


// New video
// (...) are called Rest/Spread Operator
function addCart(...num1){    //(val1, val2, ...num1)   first 2 will not execut as they are not return
    return num1
}
// console.log(addCart(100, 200, 500))

const user = {
    username : "hitesh",
    price: 999
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)

//direct object pass
handleObject({
    username: "hitesh",
    price: 999
})

// array pass
const myArray = [100,200,300]
function returnSecondArray(getArray){
    return getArray[0]
}
console.log(returnSecondArray(myArray))   //OR [100,200,300]