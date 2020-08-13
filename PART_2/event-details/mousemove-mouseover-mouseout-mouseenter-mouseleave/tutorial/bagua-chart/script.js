function clearText() {
    const text = document.getElementById("text");
    text.value = "";
}

function onEnter(elem) {
    elem.style.background = "pink";

    const text = document.getElementById("text");
    text.value += `over -> ${elem.tagName}.${elem.className}\n`;
    text.scrollTop = 1e6;
}

function onLeave(elem) {
    elem.style.background = "";

    const text = document.getElementById("text");
    text.value += `out <- ${elem.tagName}.${elem.className}\n`;
    text.scrollTop = 1e6;
}

let currentElem = null;
const table = document.getElementById("table");

table.onmouseover = function (event) {
    if (currentElem) return;

    const target = event.target.closest("td");

    if (!target || !table.contains(target)) return;

    currentElem = target;
    onEnter(currentElem);
};

table.onmouseout = function (event) {
    if (!currentElem) return;

    let relatedTarget = event.relatedTarget;

    while (relatedTarget) {
        if (relatedTarget === currentElem) return;
        relatedTarget = relatedTarget.parentNode;
    }

    onLeave(currentElem);
    currentElem = null;
};