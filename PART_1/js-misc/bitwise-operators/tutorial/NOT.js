const value = 9;
const valueBit = value.toString(2);
console.log(`value: ${value} (${valueBit})`);

const result = ~value;
const resultBit = result.toString(2);
console.log(`result: ${result} (${resultBit})`);