const map = new Map();

const proxy = new Proxy(map, {
    get(target, p, receiver) {
        const value = Reflect.get(...arguments);
        return typeof value === "function" ? value.bind(target) : value;
    }
});

proxy.set("test", 1);
console.log(proxy.get("test"));