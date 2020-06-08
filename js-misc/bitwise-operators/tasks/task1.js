const value11 = 123;
const value12 = 0;
const result1 = value11 ^ value12;
console.log(`^`);
console.log(`value11: ${value11} (${value11.toString(2)})`);
console.log(`value12: ${value12} (${value12.toString(2)})`);
console.log(`result1: ${result1}`);

const value21 = 0;
const value22 = 123;
const result2 = value21 ^ value22;
console.log(`^`);
console.log(`value21: ${value21} (${value21.toString(2)})`);
console.log(`value22: ${value22} (${value22.toString(2)})`);
console.log(`result2: ${result2}`);

const value3 = 123;
const result3 = ~~value3;
console.log(`~~`);
console.log(`value3: ${value3} (${value3.toString(2)})`);
console.log(`result3: ${result3}`);