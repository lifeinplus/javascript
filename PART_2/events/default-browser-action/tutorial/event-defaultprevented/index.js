const elem = document.getElementById("elem");

elem.oncontextmenu = function (event) {
    event.preventDefault();
    console.log("Button context menu");
};

document.oncontextmenu = function (event) {
    if (event.defaultPrevented) return;
    event.preventDefault();
    console.log("Document context menu");
};