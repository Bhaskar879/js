var c= 300     //Global scope

if(true){    //functional/Block scope
    let a=10
    const b=20
    var c=30   // goind out of the block
}
// console.log(a)   //can't be accessed
// console.log(b)  //can't be accessed
// console.log(c)      //var can accessed


// New video

function one(){
    const userName = "Bhaskar"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);   Can't access from  two()

    two()
}
// one()


console.log(addone(5));   //Possible
function addone(num){
    return num+1
}
// OR
// addTwo(5)        //not possible for variable declaration
const addTwo = function(num){
    return num+2
}