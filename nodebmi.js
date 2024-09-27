var readline = require("readline-sync");

var h = readline.question("Please input your height(cm)");
var w = readline.question("Please input your weight(kg)");
var bmi = w/((h/100)**2);
console.log("Halo your Bmi is "+ bmi);