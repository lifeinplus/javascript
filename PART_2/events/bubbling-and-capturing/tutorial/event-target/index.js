const form = document.getElementById("form");

form.onclick = function (event) {
    event.target.style.backgroundColor = "yellow";

    setTimeout(() => {
        console.log(`target = ${event.target.tagName}, this = ${this.tagName}`);
        event.target.style.backgroundColor = "";
    }, 100);
};