const tree = document.getElementById("tree");

for (let li of tree.querySelectorAll("li")) {
    const span = document.createElement("span");
    li.prepend(span);
    span.append(span.nextSibling);
}

tree.onclick = function (event) {
    const target = event.target;

    if (target.tagName !== "SPAN") {
        return;
    }

    const childrenContainer = target.parentNode.querySelector("ul");

    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
};