// >>Conversion-Operation

let score = "33"
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

//if string is "2A" then on printing you found NaN (not a number)
// null converted into 0
// boolean -> true-1 vice versa

// "33" -> 33
// "33abc" -> NaN (but type is number)
//  true->1  && false ->0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 -> boolean ->true (vice versa)
// "" -> boolean -> false
// "any value" -> boolean -> true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);





// >> Operations >>

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " aditya"

let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 +2 ); //122
// console.log(1 +2 + "2"); //32  ->here 1 and 2 adds

// console.log(+true); //1
// console.log(+"");   //0
// console.log(true+); //Error

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //bad behaviour of writing code

let gameCounter = 100
gameCounter++    //postfix operator
++gameCounter    //prefix operator
// console.log(gameCounter);





//  >>    Comparison   >>

// console.log( 2 > 1);
// console.log( 2 >= 1);
// console.log(2 < 1);
// console.log( 2==1);
// console.log( 2 != 1);


// console.log("2" > 1); //true
// console.log("02" > 1); //true

// Avoidable conversion ->{
// console.log(null > 0);  //false
// console.log(null == 0); //false
// console.log(null >= 0); //true because compariosn converts null into 0 in >=, <=, ==, >, <


// if we use undefined in place of null all are false

// }

//  strict check (===) -> it will check value and both datatype
// console.log("2" === 2) //false





// >>  DataType Summary   >>

// Primitive  -> 7 types
// String
// Number
// Boolean
// null
// undefined
// Symbol  -> used to make variable unique
// BigInt

const id = Symbol('123')

const bignumber = 32323232323232323232323n


// Non-Primitive (Reference-type)
// Array
// Object
// Function

const heros = ["Shaktiman", "naagraj", "doga"]

let myObject = {
    name: "aditya",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world");
}






// >>   Memory   >>

// Stack (primitive)
// change done in copy

let name1 = "hiii"
let anotherName = name1
anotherName = "byeee"

console.log(name1);
console.log(anotherName);

// heap  (Non-Primitive)
// change done in original value

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aditya@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// both are same as aditya@google.com