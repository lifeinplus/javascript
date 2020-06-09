let user = {
    name: "Vasya",
    _password: "ololo",

    checkPassword(value) {
        return value === this._password;
    }
};

user = new Proxy(user, {
    get(target, p) {
        if (p.startsWith("_")) {
            throw new Error("Access denied!");
        }

        let value = target[p];
        return (typeof value === "function") ? value.bind(target) : value;
    },

    set(target, p, value) {
        if (p.startsWith("_")) {
            throw new Error("Access denied!");
        }

        target[p] = value;
        return true;
    },

    deleteProperty(target, p) {
        if (p.startsWith("_")) {
            throw new Error("Access denied!");
        }

        delete target[p];
        return true;
    },

    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith("_"));
    }
});

try {
    console.log(user._password);
} catch (e) {
    console.log(e.message);
}

try {
    user._password = "test";
} catch (e) {
    console.log(e.message);
}

try {
    delete user._password;
} catch (e) {
    console.log(e.message);
}

for (const key in user) {
    console.log(key);
}

console.log(user.checkPassword("olala"));
console.log(user.checkPassword("ololo"));