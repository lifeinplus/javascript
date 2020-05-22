function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script, "WOW!");
    script.onerror = () => callback(new Error(`Can't load script ${src}!`));

    document.head.append(script);
}

function promisify(f, manyArgs = false) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(error, ...results) {
                if (error) {
                    reject(error);
                } else {
                    resolve(manyArgs ? results : results[0]);
                }
            }

            args.push(callback);
            f.call(this, ...args);
        });
    };
}

// debugger;
const loadScriptPromise = promisify(loadScript, true);

loadScriptPromise('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')
    .then(results => {
        console.log(`${results[1]} Script ${results[0].src} is loaded!`);
        console.log(_);
    })
    .catch(error => console.log(error.message));