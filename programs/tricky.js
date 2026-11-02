console.log(1 + "2");
Result: 12;

console.log(1 + 2 + "4");
Result: 34;

console.log("6" - 1);
Result: 5;

console.log("1" === 1);
Result: false;

console.log(null == undefined);
Result: true;

console.log(a);
var a = 5;
Result: undefined;

console.log(b);
let b = 10;
Result: `ReferenceError: Cannot access 'b' before initialization`;

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
Result: (3, 3, 3);

console.log(typeof []);
Result: Object;

console.log(typeof NaN);
Result: Number;

console.log(typeof null);
Result: Object;

let a = 10;
{
  console.log(a);
  let a = 20;
}
Result: `ReferenceError: Cannot access 'a' before initialization`;

var user = "Alice";
var user = "Bob"; // Totally legal

let score = 10;
score = 20; // Legal (Reassignment)
let score = 30; // SyntaxError: Identifier 'score' has already been declared

const taxRate = 0.15;
taxRate = 0.2; // TypeError: Assignment to constant variable

var a = 1;
function foo() {
  var a = 2;
  console.log(a); // 2
}
foo();
console.log(a); // 1

console.log(a); // Undefined
console.log(b); // Reference Error: Cannot access 'b' before initialization
var a = 2;
let b = 2;

var a = 10;
{
  a = 30;
  let b = 20;
}
console.log(a);
Result: 30;

console.log(b);
Result: ReferenceError;

console.log(profile); // Reference error
const profile = { name: "Alice" };
console.log(profile.age); // Output: undefined
