function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Can't load script ${src}!`));

    document.head.append(script);
}

// debugger;

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (error, script) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(`Wow, script ${script.src} is loaded`);
        console.log(_);
    }
});