const range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,

            async next() {
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                }

                return {done: true};
            }
        };
    }
};

(async () => {
    for await (const value of range) {
        console.log(value);
    }
})();