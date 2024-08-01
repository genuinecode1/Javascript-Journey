//**************************************** CONTROL FLOW *********************

// if statement
// if(condition){
//     //condition must be true or false
//     ///if true code will execute else not
// }

const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("user looged in")
// }

// comparison operator
// > < >= <= == != ===


// if-else statement
// if(condition){
//     //condition must be true or false
//     ///if true this block of code will execute 
// }else{
//     //  if false this block of code will execute
// }

const balance = 1000

// if(balance> 500 ) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 750")
// }
// else{
//     console.log("balance greater than 750")
// }

// Switch statement
// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

// Falsy value
        //     False
        //     0
        //    -0
        //    BigInt 0n
        //    ""
        //    null
        //    undefined
        //    NaN

// truthy value
            //   "0"
            //   'false'
            //   " "
            //   []
            //   {}
            //   function(){}


// NUllish Coalescing Operator (??): null undefined
// it uses when a value come from api or server sometimes it is null or undefined
let val_1
val_1 = 5 ?? 10
// console.log(val_1)
                 

// Terniary operator
//  condition? true : false

const iceTeaPrice = 100

// iceTeaPrice >= 80 ? console.log("lass than 80") : console.log("more than 80")


