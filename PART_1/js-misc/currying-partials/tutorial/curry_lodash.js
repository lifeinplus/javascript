const _ = require("lodash");

function sum(a, b) {
    return a + b;
}

const curriedSum = _.curry(sum);

console.log(curriedSum(1, 2));
console.log(curriedSum(1)(2));