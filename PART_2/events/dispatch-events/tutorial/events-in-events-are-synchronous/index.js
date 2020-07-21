const menu = document.getElementById("menu");

menu.onclick = function () {
    console.log(1);

    const customEvent = new CustomEvent("menu-open", {
        bubbles: true
    });

    menu.dispatchEvent(customEvent); // синхронно
    // setTimeout(() => menu.dispatchEvent(customEvent), 0); // асинхронно

    console.log(2);
};

document.addEventListener("menu-open", () => console.log("nested"));