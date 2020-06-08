const animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
const collator = new Intl.Collator("ru", {
    sensitivity: "accent"
});

animals.sort(collator.compare);

console.log(animals);