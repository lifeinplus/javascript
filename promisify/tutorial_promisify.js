function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Can't load script ${src}!`));

    document.head.append(script);
}

function promisify(f) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(error, script) {
                if (error) {
                    reject(error);
                } else {
                    resolve(script);
                }
            }

            args.push(callback);
            f.call(this, ...args);
        });
    };
}

// debugger;
const loadScriptPromise = promisify(loadScript);

loadScriptPromise('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')
    .then(script => {
        console.log(`WOW! Script ${script.src} is loaded!`);
        console.log(_);
    })
    .catch(error => console.log(error.message));