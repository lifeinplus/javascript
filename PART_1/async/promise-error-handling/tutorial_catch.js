window.addEventListener("unhandledrejection", function (event) {
    console.log(event.promise);
    console.log(event.reason);
});

fetch("tutorial_catch_user.json")
    .then(response => {
        blabla();
        return response.json();
    })
    .catch(error => {
        if (error instanceof ReferenceError) {
            console.log(`ReferenceError: ${error}`);
        } else {
            console.log(`Can't process error: ${error}`);
            throw error;
        }
    })
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise(resolve => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }));
    // .catch(error => console.log(`Unknown error: ${error}`));