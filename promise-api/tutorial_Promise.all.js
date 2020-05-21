let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(url => fetch(`https://api.github.com/users/${url}`));

Promise.all(requests)
    .then(responses => {
        responses.forEach(
            response => console.log(`${response.url}: ${response.status}`)
        );

        return responses;
    })
    .then(responses => {
        return Promise.all(responses.map(r => r.json()))
    })
    .then(users => {
        users.forEach(user => console.log(user.name))
    });