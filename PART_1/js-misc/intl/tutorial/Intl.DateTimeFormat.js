const date = new Date(2014, 11, 31, 12, 30, 0);

const format1 = new Intl.DateTimeFormat("ru");
const format2 = new Intl.DateTimeFormat("en-US");

const format3 = new Intl.DateTimeFormat("ru", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});

const format4 = new Intl.DateTimeFormat("ru", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
});

console.log(format1.format(date));
console.log(format2.format(date));
console.log(format3.format(date));
console.log(format4.format(date));