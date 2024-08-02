
// ************************************* LOOPS ******************************************

// for loop

// for (variable declare; condition check; increment or decrement) {
//     code block
// }

// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }

// Eg printing table
// for (let index = 1; index < 11; index++) {
//     console.log("Table of "+ index)
//     for (let i = 1; i < 11; i++) {
//         const element = index * i;
//         console.log(index + "*" + i +" = " + element) 
        
//     }
    
// }

let myArray = ["flase","batman","superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
    
// }

// console.log(myArray.length)

// break and continue

// for (let index = 1; index < 21; index++) {
//     if(index==5){
//         console.log("Detected 5")
//         break
//     }
//     if(index==3){
//         console.log("detected 3")
//         continue
//     }
//     console.log(index);

// }



// While loops

// variable initialization
// while(condition){
//     block of code
//     increment or decrement
// }

// let arr = 0
// while (arr<myArray.length) {
//     console.log(myArray[arr])
//     arr++;
// }



// do while loop -> this loop runs atleast one time
// variable initialization
// do {
//     increment or decrement
// } while (condition);

let score = 11

do{
    // console.log(`score is ${score}`)
    score++
}while (score<=10)



// For Of loop

// for (const iterator of object) {
    
// }

//example
for (const num of myArray) {
    // console.log(num)
}

const greetings = "hello world!"
for( const greet of greetings){
    // console.log(`Each word is ${greet}`)
}

// map   -> is is stored as key value pair and it holds the unique value
const map = new Map()
map.set('IN',"India")
map.set('FR',"France")

// console.log(map)

// for (const key of map) {
//     console.log(key)
// }
// array destructuing
for (const [key,value] of map) {
    // console.log(key+" : "+value)
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Pubg'
}

// for (const [key,value] of myObj) {
//     console.log(key+" : "+value)  //error //object is not iteratble
// }

// for in loop is for objects
// for (const key in object) {
//    
// }

const myObject = {
    js: 'JavaScript',
    cpp:'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(key)
    // console.log(`${key} shortuct is for ${myObject[key]}`);
}

const programming = ["js","rb","py","cpp"]

for (const key in programming) {
//    console.log(programming[key])
}


// for each loop
// array.forEach(element => {
    
// });


// const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function(item){
//         // console.log(item)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) =>{
//     //    console.log(item, index, arr);
// })

const myCoding = [
    {
        languagename: "javaScript",
        languageFileName: "js"
    },
    {
        languagename: "c++",
        languageFileName: "cpp"
    },
    {
        languagename: "python",
        languageFileName: "py"
    }
]

// myCoding.forEach((item)=>{
//     // console.log(item.languagename,"->", item.languageFileName);
// })
