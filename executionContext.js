var n = 2;
function square(num) {
  var ans = num * num;
  return ans; //4
}

var square2 = square(n);
// var

// ======== New Function ========
var x = 1;
a();
b();
console.log(x); //1

function a() {
  var x = 10;
  console.log(x); //10
}

function a() {
  var x = 100;
  console.log(x); //100
}
