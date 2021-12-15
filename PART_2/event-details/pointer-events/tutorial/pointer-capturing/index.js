const slider = document.getElementById("slider");
const thumb = slider.querySelector(".thumb");

let shiftX;

function onThumbDown(event) {
    event.preventDefault();

    shiftX = event.clientX - thumb.getBoundingClientRect().left;

    thumb.setPointerCapture(event.pointerId);

    thumb.onpointermove = onThumbMove;

    thumb.onpointerup = event => {
        thumb.onpointermove = null;
        thumb.onpointerup = null;
    };
}

function onThumbMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    if (newLeft < 0) {
        newLeft = 0;
    }

    const rightEdge = slider.offsetWidth - thumb.offsetWidth;

    if (newLeft > rightEdge) {
        newLeft = rightEdge;
    }

    thumb.style.left = newLeft + "px";
}

thumb.onpointerdown = onThumbDown;

thumb.ondragstart = () => false;