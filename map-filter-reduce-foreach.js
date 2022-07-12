// const arr = [1, 3, 4, 5, 6]

// const resultMap = arr.map((item) => item * 2) // [2,6,8,10,12]
// const resultsMap = arr.map((item) => {
//     return item * 2
// })


// const resultFilter = arr.filter((item) => item % 2 === 0) //[4,6]
// const resultsFilter = arr.filter((item) => {
//     return item % 2 === 0
// })

// const outPut = arr.reduce(function (max, curr) {
//     if (curr > max) {
//         max = curr
//     }
//     return max
// }, 0)
// console.log(outPut)// 6

// const resultReduce = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0) // 19


const users = [
    { fName: "shobhit", lName: "karnatak", age: 35 },
    { fName: "avanti", lName: "walchale", age: 24 },
    { fName: "abhishek", lName: "mishra", age: 25 },
    { fName: "saurabh", lName: "mishra", age: 28 },
    { fName: "rahul", lName: "singh", age: 30 },
]

const output = users.reduce((acc, curr) => {
    acc[curr.name] = acc[curr.name]
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

// const output = users.filter((item) => item.age > 25).map((item) => item.fName + "" + item.lName)