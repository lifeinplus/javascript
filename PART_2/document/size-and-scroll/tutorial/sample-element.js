const props = {
    geometry: [
        "clientLeft",
        "clientTop",
        "clientWidth",
        "clientHeight",
        "offsetWidth",
        "offsetHeight",
        "scrollWidth",
        "scrollHeight"
    ],

    scroll: [
        "scrollLeft",
        "scrollTop"
    ],

    offsetParent: [
        "offsetParent",
        "offsetLeft",
        "offsetTop"
    ]
};

const info = document.getElementById("info");
info.innerHTML = "<h3>Click to see the value:</h3>";

for (let key in props) {
    info.innerHTML += `<h4>${key}</h4>`;

    let propList = props[key];

    for (let i = 0; i < propList.length; i++) {
        info.innerHTML += "<span class='key'>" + propList[i] + "</span>: " +
            "<span id='" + propList[i] + "'>&nbsp</span>" + " ";

        i++;

        if (i < propList.length) {
            info.innerHTML += "<span class='key'>" + propList[i] + "</span>: " +
                "<span id='" + propList[i] + "'>&nbsp</span>";
        }

        info.innerHTML += "<br/>";
    }
}

document.onclick = function (event) {
    const target = event.target;

    if (!target.classList.contains("key")) {
        return;
    }

    const example = document.getElementById("example");
    const prop = target.innerHTML;

    let value = example[prop];
    value = value.tagName || value;

    document.getElementById(prop).innerHTML = value;
};

document.onmousemove = function (event) {
    const clientX = Math.round(event.clientX);
    const clientY = Math.round(event.clientY);
    const mouse = document.getElementById("mouse");
    mouse.innerHTML = clientX + ":" + clientY;
};