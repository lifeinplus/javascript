module.exports = {
    pseudoRandom
};

function* pseudoRandom(seed) {
    while (true) {
        seed = seed * 16807 % 2147483647;
        yield seed;
    }
}

// const generator = pseudoRandom(1);

// for (let generatorElement of generator) {
//     console.log(generatorElement);
// }