var readline = require("readline-sync");
var n = readline.questionInt("Number?");
console.log(Fab(n));
function Fab(n){
    if(n<1)
        return 1;
    else
    return Fab(n-1)+Fab(n-2);
}