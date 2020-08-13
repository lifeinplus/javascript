function showTooltip(anchorElem, html) {
    const tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = html;
    document.body.append(tooltipElem);

    const coords = anchorElem.getBoundingClientRect();

    let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) top = coords.top + anchorElem.offsetHeight + 5;

    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";

    return tooltipElem;
}

let tooltip;

document.onmouseover = function (event) {
    const anchorElem = event.target.closest("[data-tooltip]");

    if (!anchorElem) return;

    tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
};

document.onmouseout = function (event) {
    if (tooltip) {
        tooltip.remove();
        tooltip = false;
    }
};