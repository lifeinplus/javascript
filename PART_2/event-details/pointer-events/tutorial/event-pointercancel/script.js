const ball = document.getElementById("ball");

ball.onpointerdown = log;
ball.onpointerup = log;
ball.onpointermove = log;
ball.onpointercancel = log;

ball.ondragstart = () => false;

let lastEventType;
let n = 1;

function log(event) {
    const text = document.getElementById("text");

    if (lastEventType === event.type) {
        n++;
        text.value = text.value.replace(/.*\n$/, `${event.type} * ${n}\n`);
        return;
    }

    lastEventType = event.type;
    n = 1;
    text.value += event.type + "\n";
    text.scrollTop = 1e9;
}