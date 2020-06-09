async function f() {
    // try {
        // await Promise.reject(new Error("Whoops1"));

        // throw new Error("Whoops2");

        await fetch("http://no-such-url");

        // let response = await fetch("/no-user-here");
        // let user = await response.json();
    // } catch (error) {
    //     console.log("1: " + error);
    // }
}

f().catch(error => console.log("2: " + error));