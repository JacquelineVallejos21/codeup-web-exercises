"use strict";

console.log("Hello World!");
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm("What's your favorite color?");
console.log(confirmed); // will be either true or false

var userInput = prompt("rose pink");
console.log("Great, rose pink is my favorite color too!" + userInput);