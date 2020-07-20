const menu = document.getElementById("menu");

menu.onclick = function (event) {
    const target = event.target;

    if (target.nodeName !== "A") return;

    console.log(target.getAttribute("href"));

    return false;
};