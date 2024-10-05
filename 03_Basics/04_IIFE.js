// Immediately Invoked Function Expression (IIFE)
// *for removing gloval scope polution

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// OR

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();                                     //(function define) (call);   give end ;

// OR

((name) => {
    // un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh');