console.log(1n + 2n);
console.log(5n / 2n);

try {
    console.log(1n + 2);
} catch (e) {
    console.log(e.message);
}

const bigint = 1n;
const number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);

try {
    console.log(+bigint);
} catch (e) {
    console.log(e.message);
}