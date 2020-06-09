let user = {
    name: "Vasya",
    age: 30,
    _password: "***"
};

user = new Proxy(user, {
    ownKeys(target) {
        // return Object.keys(target).filter(key => !key.startsWith("_"));
        return ["aaa", "bbb"];
    },

    getOwnPropertyDescriptor(target, p) {
        return {
            enumerable: true,
            configurable: true
        };
    }
});

for (const key in user) {
    console.log(key);
}

console.log(Object.keys(user));
console.log(Object.values(user));