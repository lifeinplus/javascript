function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Can't load script ${src}!`));

    document.head.append(script);
}

function loadScriptPromise(src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (error, script) => {
            error ? reject(error) : resolve(script);
        });
    });
}

debugger;

loadScriptPromise('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')
    .then(script => {
        console.log(`Wow, script ${script.src} is loaded`);
        console.log(_);
    })
    .catch(error => console.log(error.message));