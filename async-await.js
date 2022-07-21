async function shobhit() { //async will retur a promise (Resolved and rejected)
    console.log("inside shobhit function");
    const response = await fetch('https://api.github.com/users') // await wait for the others task
    console.log("before response")
    const users = await response.json()
    console.log('users resolved')
    return users
}

console.log("before calling shobhit");
const a = shobhit()
console.log("after calling shobhit");
console.log(a)
a.then(data => console.log(data));
console.log("last line of js");