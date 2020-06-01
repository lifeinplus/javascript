let dictionary = {
    Hello: "Hola",
    Bye: "Adios"
};

dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        return phrase in target ? target[phrase] : phrase;
    }
});

console.log(dictionary.Hello);
console.log(dictionary.Welcome);
console.log(dictionary["Welcome to Proxy"]);