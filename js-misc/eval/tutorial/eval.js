let aaa = 1;
let bbb = 2;

function f() {
    let aaa = 2;
    eval("console.log(aaa)");
    eval("bbb = 3");
    eval("console.log(bbb)");
}

f();

eval("let x = 5; function f() {}");

try {
    console.log(x);
} catch (e) {
    console.log(e.message);
}
