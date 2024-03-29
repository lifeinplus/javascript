const kinput = document.getElementById("kinput");
kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

let lastTime = Date.now();

function handle(e) {
    const area = document.getElementById("area");
    const form = document.getElementById("form");

    if (form.elements[e.type + "Ignore"].checked) {
        return;
    }

    area.scrollTop = 1e6;

    const text = e.type
        + " key=" + e.key
        + " code=" + e.code
        + (e.shiftKey ? " shiftKey" : "")
        + (e.ctrlKey ? " ctrlKey" : "")
        + (e.altKey ? " altKey" : "")
        + (e.metaKey ? " metaKey" : "")
        + (e.repeat ? " (repeat)" : "")
        + "\n";

    if (area.value && Date.now() - lastTime > 250) {
        area.value += new Array(81).join('-') + "\n";
    }

    lastTime = Date.now();

    area.value += text;

    if (form.elements[e.type + "Stop"].checked) {
        e.preventDefault();
    }
}