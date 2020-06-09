function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Script loading error: " + src));

        document.head.append(script);
    });
}

loadScript("tutorial_loadScript_one.js")
    .then(script => loadScript("tutorial_loadScript_two.js"))
    .then(script => loadScript("tutorial_loadScript_three.js"))
    .then(script => {
        one();
        two();
        three();
    });