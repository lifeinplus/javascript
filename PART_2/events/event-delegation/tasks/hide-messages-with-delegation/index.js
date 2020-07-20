const container = document.getElementById("container");

container.onclick = function (event) {
    const target = event.target;

    if (target.className !== "remove-button") return;

    const pane = target.closest(".pane");
    pane.remove();
};