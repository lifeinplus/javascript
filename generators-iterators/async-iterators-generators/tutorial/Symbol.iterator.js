const range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                }

                return {done: true};
            }
        };
    }
};

for (const value of range) {
    console.log(value);
}