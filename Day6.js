

// ******************************** Functions ********************************

function sayMyName (){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    //the variable or value we conclude at time of function declaration is called parameters
    console.log("addition is : " + (number1+number2));
}

// addTwoNumbers(3, 4)  //the variable or value we conclude at time of function call is called arguments

// const result = addTwoNumbers(3, 5);

// console.log("Result : ", result)  // here is undefined because above function dost not return a value


function addTwoNumbers2(number1, number2){

    return (number1+number2)
}

const result2 = addTwoNumbers2(3, 5);
// console.log(result2)

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("aditya"))
// console.log(loginUserMessage()) // if we call parameterized function wwithout argument then it takes a undefined value

///giving default value
function loginUserMessage2(username = "sam"){
    return `${username} just logged in`
}

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username:"aditya",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

// handleObject(user) //we have check type of variable and key

// handleObject({
//     username:"sam",
//     price: 200
// })

const myNewArray = [200,300,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))


//**************************** Scope in Functions *******************/

//global scope
let a = 10
const b = 20
// var c = 30

if(true){
    //block scope
    let a = 100
    const b = 20
    // var c = 30
}

// console.log(a) 
// console.log(b)
// console.log(c) // here we should avoid var because it always works on global scope

//coding environment's global scope and website inspect's scope is different 

//for every {} scope changes

//nested scope

function one(){
    const username = "aditya"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website)
    two()
}

// one()

if(true){
    const username = "hitesh"
    if(username==="aditya"){
        const website = "youtube"
        // console.log(username+website);
    }
    // console.log(website); //scope nhi h iska that's why error
}

// console.log(username); //scope nhi h iska that's why error

// ++++++++++++++++++++++++++ INTERSETING ++++++++++++++++++++++++++++++

function addone(num){
    return num+1
}

addone(5)   //we can call function i n JS before declaration

const addTwo = function(num){
    return num+2;
}

addTwo(5)  // we can not call this function in JS before declaration


// ++++++++++++++ THIS & Arrow Function ++++++++++++++

const userp = {
    username: "aditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)  // this keyword is use for current context
        console.log(this)
    }

}

// userp.welcomeMessage()
// userp.username = "sam"
// userp.welcomeMessage()


// console.log(this)

//browser ke andar jo global object window hai

// function chai(){
//     let username = "Aditya"
//     console.log(this.username)  // we cannot use this in function its only work in objects
// }
// chai()


//How to make arrow function
//remove function word and after parathesis of function add arrow(=>)

// const chai = function(){
//     let username = "aditya"
//     console.log(this.username)
// }
const chai = () => {
    let username = "aditya"
    console.log(this)
}

// chai()


// const addTwoo = (num1, num2) =>{
//      return num1 + num2
// }

//impicit arrow function  // remove curly braces and return keyword
// const addTwoo = (num1, num2) => num1 + num2

//if we use parathesis then we dont use return keyword
// const addTwoo = (num1, num2) => (num1 + num2)

//if we want return objext then we should wrap it in curly braces
const addTwoo = (num1, num2) => ({username: "aditya"})

console.log(addTwo(1,5))

//Immediately Invoked Function Expressions (IIFE)
// wrapping a function in a paraenthesis

// (function chai(){
//     console.log(`DB Connected`)
// })();

// ((name) => {
//     console.log(`DB CONNECETD TWO ${name}`)
// })('aditya')