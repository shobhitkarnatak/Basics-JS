"null data type is object";
"undefined data type is undefined";

var a = 3 + 9 + "2" + 8; // 1228

var a = 3 + "9" + "9 + 8"; //3998

//NULL & UNDEFINED
null == undefined; //true
null === undefined; //false

// VAR vs LET vs CONST
{
  var a = 3;
  let b = 3;
  const c = 3;
}

console.log(a); //3
console.log(b); //undefined
console.log(c); //undefined

var a; //undefined
let b; //undefined
// const c; // Missing initializer in const declaration
