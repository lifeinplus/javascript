function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const sequence = generateSequence(1, 5);

console.log(sequence.next());

for (const item of sequence) {
    console.log(item);
}