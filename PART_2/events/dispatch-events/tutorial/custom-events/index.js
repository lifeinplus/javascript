const element = document.getElementById("elem");

element.addEventListener("hello", function (event) {
    console.log(event.detail.name);
});

const customEvent = new CustomEvent("hello", {
    detail: {name: "John"}
});

element.dispatchEvent(customEvent);