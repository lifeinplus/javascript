const fetch = require("node-fetch");

async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {
        const response = await fetch(url, {
            headers: {"User-Agent": "Our script"}
        });

        const commits = await response.json();

        let nextPage = response.headers.get("Link").match(/<(.*?)>; rel="next"/);
        nextPage = nextPage && nextPage[1];

        url = nextPage;

        for (const commit of commits) {
            yield commit;
        }
    }
}

(async () => {
    const repo = "javascript-tutorial/en.javascript.info";
    const commits = fetchCommits(repo);

    let count = 0;

    for await (const commit of commits) {
        let date = commit.commit.committer.date;
        let name = commit.commit.committer.name;
        let message = commit.commit.message;

        console.log(`${date} - ${name}: ${message}`);

        if (++count === 100) {
            break;
        }
    }
})();