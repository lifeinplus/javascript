const mouseEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100,
});

const event = new Event("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100,
});

console.log(mouseEvent.clientX);
console.log(event.clientX);