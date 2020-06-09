async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

(async () => {
    const sequence = generateSequence(1, 5);

    console.log(await sequence.next());

    for await (const item of sequence) {
        console.log(item);
    }
})();