const ul = document.querySelector("ul");

ul.onclick = ev => {
    const target = ev.target;

    if (target.tagName !== "LI") return;

    if (ev.ctrlKey || ev.metaKey) {
        toggleSelect(target);
    } else {
        singleSelect(target);
    }
};

function singleSelect(li) {
    const selected = ul.querySelectorAll("li");

    for (let elem of selected) {
        elem.classList.remove("selected");
    }

    li.classList.add("selected");
}

function toggleSelect(li) {
    li.classList.toggle("selected");
}
