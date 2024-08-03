
// ********************************* Map-Filter-Reduce **************************

// filter -> use to filter the array according to given condition

// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num>4
// });

const newNums = []

newNums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
});

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk)=> bk.genre === 'History')

let userBooks2 = books.filter((bk)=> bk.publish >= 2000)

// console.log(userBooks)
// console.log(userBooks2)


// map -> used to manipulate the value of the array

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newlyNums = myNumbers.map((num)=>{
    return num+10
})
// console.log(newlyNums)


//chaining

const nuNums = myNumbers
                .map((num) => num*10)
                .map((num)=>  num +1)
                .filter((num) => num>=40)

// console.log(nuNums)


//reduce  -> used to perform such opearation in array to reduce it 

const myyNums = [1,2,3]

// const myTotal = myyNums.reduce(function(acc,current){
//     console.log(`acc:${acc} and current: ${current}`)
//     return acc+current
// }, 0)

const myTotal = myyNums.reduce((acc,curr) => acc+curr, 0)

// console.log(myTotal)


const shoppingCart = [
    {
        itemName:"JS",
        price:999
    },
    {
        itemName:"pyhtonn",
        price:999
    },
    {
        itemName:"android dev",
        price:4999
    },
    {
        itemName:"full stack",
        price:6999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => item.price+acc,0)

// console.log(priceToPay)