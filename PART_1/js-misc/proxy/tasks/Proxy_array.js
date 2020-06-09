let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, p, receiver) {
        if (p < 0) {
            p = +p + target.length;
        }

        return Reflect.get(target, p, receiver);
    }
});

console.log(array[0]);
console.log(array[-1]);
console.log(array[-2]);