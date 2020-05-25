class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = "HTTP_ERROR_OLOLO";
        this.response = response;
    }
}

async function loadJson(url) {
    const response = await fetch(url);

    if (response.status === 200) {
        return response.json();
    }

    throw new HttpError(response);
}

async function demoGithubUser() {
    let result = {};

    while (true) {
        let name = prompt("Login:", "lifeinplus");

        try {
            result = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch (error) {
            if (error instanceof HttpError && error.response.status === 404) {
                console.log(error.message);
            } else {
                throw error;
            }
        }
    }

    return result;
}

demoGithubUser()
    .then(user => console.log("1: " + user.name))
    .catch(reason => console.log("2: " + reason));