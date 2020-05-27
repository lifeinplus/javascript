function* gen() {
    let result1 = yield "2 + 2 = ?";
    console.log(result1);

    let result2 = yield "3 * 3 = ?";
    console.log(result2);
}

let generator = gen();

console.log(generator.next().value);
console.log(generator.next(4).value);
console.log(generator.next(9).done);