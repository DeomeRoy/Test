var readline = require("readline-sync");

var Bus=[0,1,2,3,4,5,6,7,8,9]
var Ans=[0,1,2,3];
for(var i=0;i<4;i++){
  var rand = Math.floor(Math.random()*10);
  var temp= Bus[i];
  Bus[i] = Bus[rand];
  Bus[rand] = temp;
}
for(var i=0;i<4;i++){
  Ans[i] = Bus[i];
}
var gCount=10;
do{
  do{
    var G=readline.questionInt("Please input 4 digits? ");
  }while(String(G).length!=4)
  var Gstr = G.toString();
  var countA=0,countB=0;
  for(var i=0;i<4;i++){
      if(Ans[i] == Gstr[i])
        countA++;
      else if(Ans.includes(parseInt(Gstr[i]))){
        countB++;
      }
  }
  gCount--;
  console.log("Result: "+countA+"A"+countB+"B");
if(countA==4){
    console.log("You win!");
}
}while(countA<4 && gCount>0)
if(countA<4)
  console.log("You lose!");