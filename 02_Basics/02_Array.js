const A = ["Bhaskar","Hello"]
const B = ["super","batman"]
// A.push(B)
// console.log(A)
// console.log(A[2][1])

// const newArr =  A.concat(B)
// console.log(newArr)

const all_heros = [...A, ...B]  //most used
// console.log(all_heros)

const another_Array = [ 1, 2, 3, [ 4, 5], 6, 7 ,[ 8, 9, [ 5, 6]]]
// console.log(another_Array)
const real_Array = another_Array.flat(Infinity)  // Give array depth in ()
// console.log(real_Array)

console.log(Array.isArray("Bhaskar"))
console.log(Array.from("Bhaskar"))
console.log(Array.from({name: "Bhaskar"})) //interesting   have to give the key or value

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))