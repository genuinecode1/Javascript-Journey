// ******************************** Objects *****************************

//singleton  ->  jab bhi litereal (below example given) ki tarah declare karte hai to singleton nnhi banta

const mySym = Symbol("key1")
//object literals
const JsUser = {
//   key:value
    name: "aditya",
    "full name":"aditya mani",
    age:18,
    [mySym]: "mykey1", //this is how we write symbol in objext
    location:"kanpur",
    email:"aditya@gmail.com",
    isLoggedin: false,
    lastLoginDays:["Monday","Wednesday"]
}

//to access oblect elements

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(typeof JsUser[mySym])
//we can not access with full name through dot(.) so we use bracket notation

JsUser.email = "adityamani@gmail.com" //this is how we change the key value iin objext
// Object.freeze(JsUser) // we can freeze also value of objext that no one allows to change value


// console.log(JsUser)
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}


// console.log(JsUser.greeting())
// console.log(JsUser.greeting2())

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedin = false

// console.log(tinderUser)

const regularUser = {
    email: "some@example.com",
    fullname:{
        userFullName: {
            firstName: "aditya",
            lastName: "mani"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = {obj1, obj2}  //same array isssue object in a object

// const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id:1,
        email:"aditya@gmail.com"
    },
    {
        id:2,
        email:"mani@google.com"
    }
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'))

const course = {
    coursename: "JS in hindi",
    price:"999",
    courseInstructor :"Aditya",
}

// object deStructure
const {courseInstructor: instructor} = course
// console.log(instructor)


// JSON API structure
//mostly it is object
//{
//     name: "aditya",
//     coursename: "JS in hindi",
//     price: "free"
// }

// sometimes it is array also
// [
//     {},
//     {},
//     {}
// ]


