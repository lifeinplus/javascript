const thumbs = document.getElementById("thumbs");

thumbs.onclick = function (ev) {
    const target = ev.target;
    const a = target.closest("a");

    if (!a) return;

    const largeImg = document.getElementById("largeImg");
    largeImg.src = a.href;
    largeImg.alt = a.title;

    ev.preventDefault();
};