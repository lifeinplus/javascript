const value1 = 9;
const value2 = 14;

const valueBit1 = value1.toString(2);
const valueBit2 = value2.toString(2);

console.log(`${value1} | ${value2} = ${value1 | value2}`);

console.log(valueBit1);
console.log(valueBit2);
console.log((value1 | value2).toString(2));