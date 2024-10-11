var readline = require("readline-sync");

var h = readline.questionFloat("Please input your height(cm)");
var w = readline.questionFloat("Please input your weight(kg)");
var bmi = w/((h/100)**2);
console.log("你的BMI是 "+ bmi);
if (bmi < 18.5){
    console.log("體重過輕");
}
 else if (18.5 < bmi&&bmi < 24){
    console.log("體重正常");
 }
 else if (24 < bmi&&bmi < 27){
    console.log("體重過重");
 }
 else if (27 < bmi&&bmi < 30) {
    console.log("體重輕度肥胖");
 }
 else if (30 < bmi&&bmi < 35) {
    console.log("體重中度肥胖");
 }
 else{
    console.log("體重重度肥胖");
 }