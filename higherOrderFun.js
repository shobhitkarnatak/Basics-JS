// Higher Order Fn: A fn takes another fn as an arguments and return a fn from it

function x() {
    console.log("Higher order fn");
}

function y(x) {
    x();
}

// const numbers = [1, 2, 3, 4, 5];
// function addOneMore(array, newArr = []) {
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(array[i] + 1);
//     }
//     return newArr;
// }
// const newArray = addOneMore(numbers);
// console.log(newArray);


// const numbers = [1, 2, 3, 4, 5];
// const oddArray = numbers.filter((number) => number % 2 !== 0);
// console.log(oddArray);


// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.map((number) => number + 1);
// console.log(numbers);


// const numbers = [1, 2, 3, 4, 5];
// const totalValue = numbers.reduce((sum, number) => sum + number);
// console.log(totalValue);

