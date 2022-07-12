a() //Hello
b() //b is not a function

//function statement aka function declaration
function a() {
    console.log("Hello");
}

//function expression
var b = function () {
    console.log("Hello");
}


//anonymous function
// function() {
// }


//Named function expression
var b = function xyz() {
    console.log("Hello");
}

console.log(xyz) //Reference error, xyz is not defined


//Parameter & Arguments

var a = function (param1, param2) {// Local variable,identifier,labels inside the function 
    console.log(param1, param2);
}

a(1, 2) //The values which we pass inside a function

// label and identifier which gets those values know as parameter


//First class functions (First class citizens): ability to used like a values
var a = function (param1, param2) {
    console.log(param1, param2);
}

a(function () {

})

// function inside another function as an arguments, recived in parameters
// ability to use fn as values & can pe passed as an arugments in another function


// Arrow functions: allow us to write shorter function syntax.

const a = (val) => {
    console.log(5);
}
a(2)

