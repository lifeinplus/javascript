const value = 9;
const key = 1220461917;

const valueBit = value.toString(2);
const keyBit = key.toString(2);

console.log(`value: ${value} (${valueBit})`);
console.log(`key: ${key} (${keyBit})`);

const result = value ^ key;
const resultBit = result.toString(2);

console.log(`result: ${result} (${resultBit})`);
console.log(`result ^ key: ${result ^ key} (${(result ^ key).toString(2)})`);