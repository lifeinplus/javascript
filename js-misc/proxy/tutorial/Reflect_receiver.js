const user = {
    _name: "Guest",

    get name() {
        return this._name;
    }
};

const userProxy = new Proxy(user, {
    get(target, p, receiver) {
        // return target[p]; // Guest
        // return Reflect.get(target, p, receiver); // Admin
        return Reflect.get(...arguments); // Admin
    }
});

const admin = {
    __proto__: userProxy,
    _name: "Admin"
};

console.log(admin.name);