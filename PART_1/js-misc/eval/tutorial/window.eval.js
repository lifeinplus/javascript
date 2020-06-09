const x = 1;

{
    const x = 5;
    eval("console.log(x)");
    window.eval("console.log(x)");
}