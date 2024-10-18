// Creating Promise

const promise1 = new Promise(function(reslove, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        reslove();
    }, 1000)
})

promise1.then(function(){
    console.log("Promise consumed");
})

// OR

new Promise(function(reslove, reject){
    setTimeout(function(){
        console.log('Async task 2');
        reslove();
    }, 1000)

}).then(function(){
    console.log('Async 2 resolved');
})


// Data pass
const promise3 = new Promise(function(reslove, reject){
    setTimeout(function(){
        reslove({username: "Bhaskar", email: "bhaskar@example.com"});  //pass object or array
    }, 1000)
})

promise3.then(function(user){
    console.log(user);
})



//error handle
const promise4 = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            reslove({username: "Bhaskar", password: '123'}); 
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promise4         //channing
.then((user) => {
    console.log(user);
    return user.username;    //access one element
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {    //always execute
    console.log("The promise is either resolved or rejected");
})


// .then  .catch  OR   Async await

// Async await
const promise5 = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            reslove({username: "javaScript", password: '123'}); 
        } else{
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log((error));
    }
}
consumePromise5()


// Fetch
// async function getUser() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data = await response.json()  //here await is required
//         console.log(data);

//     } catch (error) {
//         console.log("ERROR: ", error);
//     }
// }
// getUser();

// OR

fetch('https://api.github.com/users/hiteshchoudhary')     //*first, this code block will execute then rest code
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
