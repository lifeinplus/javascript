class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    save() {
        console.log("saving");
    }

    load() {
        console.log("loading");
    }

    search() {
        console.log("searching");
    }

    onClick(event) {
        const action = event.target.dataset.action;
        if (action) this[action]();
    }
}

const menu = document.getElementById("menu");
new Menu(menu);