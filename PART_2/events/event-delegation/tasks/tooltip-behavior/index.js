let tooltipElem;

document.onmouseover = function (event) {
    const target = event.target;
    const tooltipHtml = target.dataset.tooltip;

    if (!tooltipHtml) return;

    tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    const coords = target.getBoundingClientRect();
    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;

    if (left < 0) {
        left = 0;
    }

    let top = coords.top - tooltipElem.offsetHeight - 5;

    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";
};

document.onmouseout = function (event) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
};