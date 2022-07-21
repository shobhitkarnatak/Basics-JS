// Impure Fuctions

var a = 10;
function add() {
  console.log(a);
  a++;
}

add();
add();
add();
add(); //10 11 12 13

// Pure Functions

// var a = 10;
// var b = 20;
function add(a, b) {
  console.log(a + b);
  return a + b;
}

add(2, 4); //6
add(6, 8); //14
