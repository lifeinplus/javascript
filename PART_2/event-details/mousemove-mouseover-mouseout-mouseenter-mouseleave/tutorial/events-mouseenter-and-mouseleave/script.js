function clearText() {
    const text = document.getElementById("text");
    text.value = "";
}

function mouselog(event) {
    const d = new Date();
    const text = document.getElementById("text");
    const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    text.value += `${time} | ${event.type} [target: ${event.target.id}]\n`.replace(/(:|^)(\d\D)/, "$10$2");
    text.scrollTop = text.scrollHeight;
}