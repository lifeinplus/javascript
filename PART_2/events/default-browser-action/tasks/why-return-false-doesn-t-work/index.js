function handler1(event) {
    console.log("aaa");
    return false;
}

function handler2(event) {
    console.log("bbb");
    event.preventDefault();
}