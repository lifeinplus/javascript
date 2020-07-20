const contents = document.getElementById("contents");

contents.onclick = function (ev) {
    const target = ev.target;
    const a = target.closest("a");

    if (a && contents.contains(a)) {
        const href = a.getAttribute("href");
        return confirm(`Leave for ${href}?`);
    }
};