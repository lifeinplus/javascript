const table = document.getElementById("age-table");
console.log(table);

const labels1 = table.getElementsByTagName("label");
const labels2 = document.querySelectorAll("#age-table label");
console.log(labels1);
console.log(labels2);

const td1 = table.rows[0].cells[0];
const td2 = table.getElementsByTagName("td")[0];
const td3 = table.querySelector("td");
console.log(td1);
console.log(td2);
console.log(td3);

const form1 = document.getElementsByName("search")[0];
const input = form1.getElementsByTagName("input")[0];
console.log(form1);
console.log(input);

const form2 = document.querySelector("form[name='search']");
const inputs = form2.querySelectorAll("input");
console.log(form2);
console.log(inputs[inputs.length - 1]);