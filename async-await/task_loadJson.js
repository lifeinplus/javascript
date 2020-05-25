async function loadJson(url) {
    const response = await fetch(url);
    const status = String(response.status);

    if (status === "200") {
        const user = await response.json();
        return user.name;
    }

    throw new Error(status);
}

// loadJson("no-such-user.json")
loadJson("task_loadJson_user.json")
// loadJson("https://api.github.com/users/lifeinplus")
    .then(name => console.log("1: " + name))
    .catch(error => console.log("2: " + error));