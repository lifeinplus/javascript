const allUsers = new Set();

class User {
    constructor(name) {
        this.name = name;
        allUsers.add(this);
    }
}

let user = new User("Vasya");

console.log(allUsers.has(user));

user = new Proxy(user, {});

console.log(allUsers.has(user));