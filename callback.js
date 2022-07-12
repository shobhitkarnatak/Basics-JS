// Callback functions
// Take a function and pass it to another function

setTimeout(() => {
    console.log("Timer");
}, 5000);

function x(y) {
    console.log("x")
    y()
}

x(function y() {
    console.log("y");
})

// JS is asynchronous & single - threaded

// Blocking the main thread

// Closure demo with Event Listners
function attachEventListener() {
    let count = 0;
    document.getElementById('clickMe').addEventListener("click", () => {
        console.log("Click count", count++)
    })
}


//Garbage collection & removeEventListeners
