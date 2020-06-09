function* gen() {
    try {
        let result = yield "2 + 2 = ?";
        console.log(result);
    } catch (e) {
        // console.log(e);
        throw e;
    }
}

let generator = gen();
console.log(generator.next().value);

try {
    generator.throw(new Error("Answer not found in database!"));
} catch (e) {
    console.log(e.message);
}