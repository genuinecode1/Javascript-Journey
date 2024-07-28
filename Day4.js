// *************************** Array ***********************************

const nArr = [0,1,2,3,4,5,"Aditya"] //it is totally legal in js

const names = ["Robert", "tom"]

const ages = [1,2,3,4,5]

const myArr = new Array(1, 2, 3, 4)

//Array methods

myArr.push(6);
// console.log(myArr);

myArr.pop();

myArr.unshift(9);
// console.log(myArr)

myArr.shift();

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

const newArr = myArr.join()  //type is string

// console.log(myArr);
// console.log(newArr) 
// console.log(typeof newArr)

// console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
// console.log("C ", myArr)
// console.log(myn2)

//the real difference between slice and splice is slice doesn't manipulate the original array while splice does

const marvel = ["thor","ironman","spiderman"]
const dc = ["superman", "flash","batman"]

// marvel.push(dc); //here whole dc array ente as a element

// console.log(marvel)

// marvel.concat(dc);  //output will be same as previous if we will not hold it to a new array

// console.log(marvel)

// const neArr = marvel.concat(dc)

// console.log(neArr)

const all_new_heros = [...marvel, ...dc] //this also works as previous

// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]],12]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name:"hitesh"})) //interesting part of the array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3))