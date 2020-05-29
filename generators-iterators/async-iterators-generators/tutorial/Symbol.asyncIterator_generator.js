const range = {
    from: 1,
    to: 5,

    async * [Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            yield value;
        }
    }
};

(async () => {
    for await (const value of range) {
        console.log(value);
    }
})();