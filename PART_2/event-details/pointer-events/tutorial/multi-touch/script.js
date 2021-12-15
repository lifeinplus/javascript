document.onpointerdown = document.onpointerup = log;

function log(event) {
    const area = document.getElementById("area");
    const html = `<div>${event.type} isPrimary=${event.isPrimary} pointerId=${event.pointerId}</div>`;
    area.insertAdjacentHTML("beforeend", html);
    area.scrollTop = 1e9;
}