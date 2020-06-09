function delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArg, argArray) {
            setTimeout(() => target.apply(thisArg, argArray), ms);
        }
    });
}

function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

console.log(sayHi.length);

sayHi = delay(sayHi, 3000);

console.log(sayHi.length);

sayHi("Vasya");