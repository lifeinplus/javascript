let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, p, receiver) {
            if (p in target) {
                return Reflect.get(target, p, receiver);
            }

            return new ReferenceError("No such property: " + p);
        }
    });
}

user = wrap(user);

console.log(user.name);
console.log(user.age);