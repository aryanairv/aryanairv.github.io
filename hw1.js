/*
Name: Arya Nair
Date created: 2/27/26
Date last edited: 2/27/26
Version: 1.0
Description: Assignment 1 for TP
*/

//date code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};
