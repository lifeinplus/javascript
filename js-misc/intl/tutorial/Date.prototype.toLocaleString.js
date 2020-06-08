const date = new Date(2014, 11, 31, 12, 0);

console.log(date.toLocaleString("ru", {
    year: "numeric",
    month: "long"
}));

console.log(date.toLocaleString("ru"));
console.log(date.toLocaleDateString("ru"));
console.log(date.toLocaleTimeString("ru"));