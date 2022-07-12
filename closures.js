// Closures & Lexical Scope
// const outerFun = (a) => {
//   let b = 10;

//   const innerFun = () => {
//     let sum = a + b;
//     console.log(`sum of two no is ${sum}`);
//   };
//   innerFun();
// };

// outerFun(5);



function x() {
  var a = 7;
  function y() {
    console.log(a)
  }
  var a = 100;
  return y;
}

var z = x()
console.log(z) //7, 100
z()


function z() {
  function x() {
    var a = 7;
    function y() {
      var b = 20;
      console.log(a, b)
    }
    var a = 100;
    return y;
  }
  return x;
}
return z;

