console.log("starting up");

setTimeout(() => {
    console.log("inside callback...")
}, 2000);

setTimeout(() => {
    console.log("second timeout...")
}, 0)

console.log("finishing up...")