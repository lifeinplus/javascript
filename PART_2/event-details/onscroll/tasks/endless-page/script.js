function populate() {
    while (true) {
        const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

        if (windowRelativeBottom > document.documentElement.clientHeight + 100) {
            break;
        }

        document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`)
    }
}

window.addEventListener("scroll", populate);

populate();