var CG2D=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];
var row=CG2D.length;
var col=CG2D[0].length;

var canvas = document.getElementById("map").getContext("2d");
var size=canvas.width/row
for(var _row=0;_row<row;_row++){
    for(var _col=0;_col<col;_col++){
        if(CG2D[_col][_row]==1){
            canvas.fillStyle="#0000ff"
        }else{
            canvas.fillStyle="#000000"
        }
        canvas.fillRect(_row*60,_col*60,60,60);
        canvas.strokeRect(_row*60,_col*60,60,60);
    }
}







// function calcBmi(){
    
// }