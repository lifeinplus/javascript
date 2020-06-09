class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = "HTTP_ERROR_OLOLO";
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        }

        throw new HttpError(response);
    });
}

function demoGithubUser() {
    const name = prompt("Login:", "lifeinplus");

    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            console.log(`Full name: ${user.name}.`);
            return user;
        })
        .catch(error => {
            if (error instanceof HttpError && error.response.status === 404) {
                console.log("No such user. Please, try again.");
                return demoGithubUser();
            }

            throw error;
        });
}

demoGithubUser().catch(reason => console.log("1: " + reason));