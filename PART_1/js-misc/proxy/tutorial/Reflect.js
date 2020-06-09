let user = {
    name: "Vasya"
};

user = new Proxy(user, {
    get(target, p, receiver) {
        console.log(`GET ${p}`);
        return Reflect.get(target, p, receiver);
    },

    set(target, p, value, receiver) {
        console.log(`SET ${p}=${value}`);
        return Reflect.set(target, p, value, receiver);
    }
});

const name = user.name;
user.name = "Pete";