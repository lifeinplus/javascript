const collator1 = new Intl.Collator();
console.log(`"ёжик" > "яблоко": ${"ёжик" > "яблоко"}`);
console.log(`collator1.compare("ёжик", "яблоко"): ${collator1.compare("ёжик", "яблоко")}`);
console.log(`collator1.compare("ЁжиК", "ёжик"): ${collator1.compare("ЁжиК", "ёжик")}`);

const collator2 = new Intl.Collator(undefined, {
    sensitivity: "accent"
});

console.log(`collator2.compare("ЁжиК", "ёжик"): ${collator2.compare("ЁжиК", "ёжик")}`);