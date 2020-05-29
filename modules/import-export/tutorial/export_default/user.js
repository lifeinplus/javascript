export default class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name + ": Hi!");
    }
}