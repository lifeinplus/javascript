function hide() {
    const customEvent = new CustomEvent("hide", {
        cancelable: true
    });

    const element = document.getElementById("rabbit");
    const cancelled = !element.dispatchEvent(customEvent);

    if (cancelled) {
        console.log("The action was prevented by a handler");
    } else {
        element.hidden = true;
    }
}

const element = document.getElementById("rabbit");

element.addEventListener("hide", function (event) {
    if (confirm("Call preventDefault?")) {
        event.preventDefault();
    }
});