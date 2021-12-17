const arrowTop = document.getElementById("arrowTop");

window.addEventListener("scroll", function () {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

arrowTop.onclick = function () {
    window.scrollTo(pageXOffset, 0);
};