Promise.resolve()
    .then(() => console.log("aaa.1"));
console.log("aaa.2");

Promise.resolve()
    .then(() => console.log("bbb.1"))
    .then(() => console.log("bbb.2"));