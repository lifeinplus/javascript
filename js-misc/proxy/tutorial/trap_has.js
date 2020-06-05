let range = {
    start: 1,
    end: 10
};

range = new Proxy(range, {
    has(target, p) {
        return p >= target.start && p <= target.end;
    }
});

console.log(5 in range);
console.log(50 in range);