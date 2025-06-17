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

// Methods

// - Promise.all()

const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log('All resolved:', results);
  })
  .catch((error) => {
    console.error('One or more promises rejected:', error);
  });

// - Promise.allSettled()

