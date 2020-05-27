function* generateAlphaNum() {
    // 0..9
    for (let i = 48; i <= 57; i++) {
        yield i;
    }

    // A..Z
    for (let i = 65; i <= 90; i++) {
        yield i;
    }

    // a..z
    for (let i = 97; i <= 122; i++) {
        yield i;
    }
}

let str = "";

for (let code of generateAlphaNum()) {
    str += String.fromCharCode(code);
}

console.log(str);