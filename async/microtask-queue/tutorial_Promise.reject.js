const promise = Promise.reject(new Error("Promise error!"));

setTimeout(function () {
    promise.catch(error => console.log("Catch!"));
}, 1000);

window.addEventListener("unhandledrejection", event => console.log(event.reason));