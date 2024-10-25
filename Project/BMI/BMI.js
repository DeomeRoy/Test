function calcBmi(){
    var h = Number(document.getElementById("h").value);
    var w = Number(document.getElementById("w").value);
    var bmi = w/((h/100)**2);
    document.getElementById("bmi").innerHTML = bmi;
    console.log("Halo!!!Your BMI value is "+ bmi);
}