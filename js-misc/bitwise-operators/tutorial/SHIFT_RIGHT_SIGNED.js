const value = 9;
const valueBit = value.toString(2);
console.log(`value1: ${value} (${valueBit})`);

const result = value >> 2;
const resultBit = result.toString(2);
console.log(`result1: ${result} (${resultBit})`);

const value2 = -9;
const valueBit2 = value2.toString(2);
console.log(`value2: ${value2} (${valueBit2})`);

const result2 = value2 >> 2;
const resultBit2 = result2.toString(2);
console.log(`result2: ${result2} (${resultBit2})`);