//********************************** String **********************************
const name = "Aditya"
const repoCount = 50

//console.log(name + repoCount + " Value");

// backtickes -> ``
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//Declaration string 2 ->
const userName = new String('genuine_code')

//String methods ->

//console.log(userName[0]);

//to access proto (it is just a syntax do not resist to use it)
//console.log(userName.__proto__);

//console.log(userName.length);

//console.log(userName.toUpperCase());

//console.log(userName.charAt(2));

//console.log(userName.indexOf('t'));

const newString = userName.substring(0,4)
// console.log(newString);

const anotherString = userName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "  hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://illuminati.com/aditya%20mani"

url.replace('%20', '-')

url.includes('hitesh')

// console.log(userName.split('-'));



//*************************** Number **********************************
const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3))

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));



//****************************** Maths *******************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));
// console.log(Math.random());  //  value comes between 0 and 1
// console.log(Math.random()*10 + 1);
// console.log(math.floor(Math.random()*10 + 1));

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)));



// ****************************** Date *****************************
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);   // it is object

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

let aNewDate = new Date("01-14-2024")

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})

