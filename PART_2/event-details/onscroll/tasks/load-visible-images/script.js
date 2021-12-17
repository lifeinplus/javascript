function isVisible(elem) {
    const coords = elem.getBoundingClientRect();
    const windowHeight = document.documentElement.clientHeight;

    const topVisible = coords.top > 0 && coords.top < windowHeight;
    const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;
}

function showVisible() {
    for (const img of document.querySelectorAll("img")) {
        let realSrc = img.dataset.src;

        if (!realSrc) continue;

        if (isVisible(img)) {
            realSrc += "?nocache=" + Math.random();
            img.src = realSrc;
            img.dataset.src = "";
        }

    }
}

window.addEventListener("scroll", showVisible);

showVisible();