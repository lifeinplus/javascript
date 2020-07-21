document.addEventListener("hello", function (event) {
    const target = event.target;
    console.log("Hello from " + target.tagName);
});

const element = document.getElementById("elem");
const event = new Event("hello", {bubbles: true});

element.dispatchEvent(event);