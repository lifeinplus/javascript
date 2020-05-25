function loadJson(url) {
    console.log(1);
    return fetch(url)
        .then(response => {
            console.log(1.1);
            return response.json();
        });
}

function loadGithubUser(user) {
    console.log(2);
    return fetch(`https://api.github.com/users/${user.name}`)
        .then(response => {
            console.log(2.1);
            return response.json();
        });
}

function showAvatar(githubUser) {
    console.log(3);
    return new Promise(resolve => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

loadJson("tutorial_showAvatar_user.json")
    .then(loadGithubUser)
    .then(showAvatar)
    .then(githubUser => {
        console.log(4);
        console.log(`${githubUser.name}'s avatar  is removed.`)
    });

console.log(5);