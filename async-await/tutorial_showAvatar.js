async function showAvatar() {
    let response = await fetch("tutorial_showAvatar_user.json");
    let user = await response.json();

    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    document.body.append(img);

    await new Promise(resolve => {
        setTimeout(resolve, 3000);
    });

    img.remove();

    return githubUser;
}

// debugger;

showAvatar().then(githubUser => {
    console.log(`${githubUser.name}'s avatar  is removed.`)
});

console.log(1);