const value = 1234567890.123;
console.log(`value: ${value}`);

const numberFormat1 = new Intl.NumberFormat("ru");

const numberFormat2 = new Intl.NumberFormat("ru", {
    maximumSignificantDigits: 3
});

const numberFormat3 = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "GBR"
});

const numberFormat4 = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "GBR",
    minimumFractionDigits: 3
});

console.log(`numberFormat1: ${numberFormat1.format(value)}`);
console.log(`numberFormat2: ${numberFormat2.format(value)}`);
console.log(`numberFormat3: ${numberFormat3.format(value)}`);
console.log(`numberFormat4: ${numberFormat4.format(value)}`);