const element = document.getElementById("field");

element.onmousemove = function (ev) {
    element.value = ev.clientX + ":" + ev.clientY;
};