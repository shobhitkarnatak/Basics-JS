function x() {
    for (var i = 0; i <= 5; i++) { // var is functional scope
        setTimeout(function () {
            console.log(i) // 6 6 6 6 6 6 
        }, 1000);
    }
}

function x() {
    for (let i = 0; i <= 5; i++) { // let is block scope
        setTimeout(function () {
            console.log(i) // 1 2 3 4 5 6 
        }, 1000);
    }
}

x();