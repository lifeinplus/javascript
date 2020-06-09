const revokes = new WeakMap();

const object = {
    data: "Important data"
};

const {proxy, revoke} = Proxy.revocable(object, {});

revokes.set(proxy, revoke);

console.log(proxy.data);

const revoke2 = revokes.get(proxy);

revoke2();

console.log(proxy.data);