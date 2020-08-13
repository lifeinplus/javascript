function handler(event) {
    const log = document.getElementById("log");

    log.value += event.type
        + ": target=" + str(event.target)
        + ", relatedTarget=" + str(event.relatedTarget)
        + "\n";

    log.scrollTop = log.scrollHeight;

    if (event.type === "mouseover") {
        event.target.style.background = "pink";
    }

    if (event.type === "mouseout") {
        event.target.style.background = "";
    }
}

function str(el) {
    if (!el) return "null";
    return el.className || el.tagName;
}

const container = document.getElementById("container");

container.onmouseover = handler;
container.onmouseout = handler;