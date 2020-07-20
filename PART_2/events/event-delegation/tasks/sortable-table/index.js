const grid = document.getElementById("grid");

grid.onclick = function (e) {
    const target = e.target;

    if (target.tagName !== "TH") return;

    sortGrid(target.cellIndex, target.dataset.type);
};

function sortGrid(collNum, type) {
    const grid = document.getElementById("grid");
    const tbody = grid.querySelector("tbody");
    const rowsArray = Array.from(tbody.rows);

    let compare;

    switch (type) {
        case "number":
            compare = function (rowA, rowB) {
                const collA = rowA.cells[collNum];
                const collB = rowB.cells[collNum];
                return collA.innerHTML - collB.innerHTML;
            };
            break;
        case "string":
            compare = function (rowA, rowB) {
                const collA = rowA.cells[collNum];
                const collB = rowB.cells[collNum];
                return collA.innerHTML > collB.innerHTML ? 1 : -1;
            };
            break;
    }

    rowsArray.sort(compare);
    tbody.append(...rowsArray);
}
