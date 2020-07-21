const element = document.getElementById("field");

element.oncopy = ev => {
    console.log("Copying forbidden!");
    ev.preventDefault();
};