if (!Promise.allSettledMy) {
    Promise.allSettledMy = function (promises) {
        return Promise.all(promises.map(promise => {
            return Promise.resolve(promise)
                .then(
                    value => {
                        return {
                            state: 'fulfilled',
                            value: value
                        };
                    },
                    error => {
                        return {
                            state: 'rejected',
                            reason: error
                        };
                    });
        }));
    };
}

Promise.allSettledMy([
    new Promise(resolve => resolve("aaa")),
    new Promise(resolve => resolve(new Error("Rejected promise"))),
    new Promise((resolve, reject) => reject(new Error("Rejected promise"))),
    "bbb",
    new Error("ccc"),
])
    .then(console.log);