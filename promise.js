// Promise:
//     - Resolve
//     - Reject
//     - Pending


function fun1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Promise has been resolved");
                resolve()
            } else {
                console.log("Promise not resolved");
                reject("Promise not fulfill")
            }
        }, 2000);
    })
}

fun1.then(function () {
    console.log("Yeah resolved")
}).catch(function (error) {
    console.log("Shit rejected" + error);
})