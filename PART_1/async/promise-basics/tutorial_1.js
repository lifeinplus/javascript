new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("done");
        reject(new Error("Whoops!"));
    }, 1000);
})
    .finally(() => console.log("Promise completed"))
    .then(console.log, console.log)
    .catch(console.log);