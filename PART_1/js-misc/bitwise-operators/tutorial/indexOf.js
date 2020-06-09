const n = -1;
const notN = ~n;

console.log(`n: ${n} (${n.toString(2)})`);
console.log(`~n: ${notN} (${notN.toString(2)})`);

if (notN) {
    console.log("n is not -1");
}

const str = "Check";

if (~str.indexOf("eck")) {
    console.log("Found!");
}