class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        console.log(this.num);
        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

async function f() {
    let result = await new Thenable(1);
    return result * 2;
}

f().then(console.log);