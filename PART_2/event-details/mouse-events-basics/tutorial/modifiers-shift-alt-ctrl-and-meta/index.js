const button = document.getElementById("button");

button.onclick = function (ev) {
    if (ev.altKey && ev.shiftKey) {
        console.log("Hooray!");
    }
};