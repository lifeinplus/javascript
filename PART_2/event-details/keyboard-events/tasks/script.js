function runOnKeys(func, ...codes) {
    const pressed = new Set();

    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }

        pressed.clear();

        func();
    })

    document.addEventListener("keyup", function (event) {
        pressed.delete(event.code);
    })
}

runOnKeys(() => console.log("Hello!"), "KeyQ", "KeyW");