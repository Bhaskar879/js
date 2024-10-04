// const tinderUser = new Object()  //Singleton Object

const tinderUser = {}  //Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Bhaskar"
tinderUser.isLoggedIn = false

console.log(tinderUser)
console.log(Object.keys(tinderUser))  //all are converted into string
console.log(Object.values(tinderUser))  //all are converted into string
console.log(Object.entries(tinderUser))  //all are converted into ARRAY
console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // checking has or not     Benefit: Error free code

const regularUser = {
    email: "bhaskar@gmail.com",
    fullname : {
        userfullname:{ 
            fullname: "Bhaskar",
            lastname: "Ruidas"
        }
    }
}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}  //Don't use
// const obj4 = Object.assign(obj1, obj2, obj3)
//OR
// const obj4 = Object.assign({}, obj1, obj2, obj3
// const obj4 = {...obj1, ...obj2, ...obj3}  //easy    use this    (Spread)
// console.log(obj4)

//Frome dataBase objects are coming in the form of array
const users = [     //Total 3 objects
    {
        id: 1,
        email: "bhaskar@gmail.com"
    },
    {
        id: 2,
        email: "shonjay@gmail.com"
    },
    {
        id: 3,
        email: "bhola@gmail.com"
    }
]

console.log(users[1].email)








//New video
const course = {
    courseName: "Js in Hindi",
    price: "999",
    Instructor: "Hitesh"
}

console.log(course.Instructor)  //repetative (.)operator
const {Instructor} = course //Shortcut use.    name change     const {Instructor: teacher} = course
console.log(Instructor)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//In React
// const navbar = ({company}) => {

// }
// navbar(company = "bhaskar")
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *Jshon Format search  for understanding *API
// Jshon
// {
//     "name": "hiesh",
//     "courseName": "JS"
// }


