async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 1000);
    });

    return await promise;
}

f().then(console.log);

console.log(2);