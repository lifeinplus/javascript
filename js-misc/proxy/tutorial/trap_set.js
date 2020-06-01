let numbers = [];

numbers = new Proxy(numbers, {
    set(target, key, value) {
        if (typeof value === "number") {
            target[key] = value;
            return true;
        }

        return false;
    }
});

numbers.push(1);
numbers.push(2);

console.log("Length: " + numbers.length);

numbers.push("test");

console.log("Error occurred");