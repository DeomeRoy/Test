var CG2D=[];
var row=60, col=60;
var o,x,y;
for(var _row=0;_row<row;_row++){
    CG2D.push([]);
    for(var _col=0;_col<col;_col++){
        CG2D[_row].push(Math.floor(Math.random() * 2));
    }
}
var row=CG2D.length;
var col=CG2D[0].length;
function Random(){
    var CG2D=[];
    for(var _row=0;_row<row;_row++){
        CG2D.push([]);
        for(var _col=0;_col<col;_col++){
            CG2D[_row].push(Math.floor(Math.random() * 2));
        }
    }
    var canvas = document.getElementById("map").getContext("2d");
    var size=canvas.width/row
    for(var _row=0;_row<row;_row++){
        for(var _col=0;_col<col;_col++){
            if(CG2D[_col][_row]==1){
                canvas.fillStyle="#FFFFFF"
            }else{
                canvas.fillStyle="#000000"
            }
            canvas.fillRect(_row*10,_col*10,10,10);
            canvas.strokeRect(_row*10,_col*10,10,10);
        }
    }
}

function NextStep(){
    var canvas = document.getElementById("map").getContext("2d");
    var size=canvas.width/row
    for(var _row=0;_row<row;_row++){
        for(var _col=0;_col<col;_col++){
            x=0;
            y=0;
            CG2D.push([]);
            for(var i=-1;i<2;i++){
                x+i==x;
                for(var m=-1;m<2;m++){
                    y+m==y;
                    if((_row+x)<0 ||(_row+x>59)||(_col+y-1)<0 ||(_col+y>59)){
                        return 0;
                    }
                    if(CG2D[_row+x,_col+y]==1){
                        o+1==o;
                    }
                    else if(CG2D[_row+x,_col+y]==0){
                        return 0;
                    }
                }
            }
            if(o<2||o>3){
                canvas.fillStyle="#FFFFFF"
            }
            else if(o==2||o==3){
                canvas.fillStyle="#000000"
            }
            canvas.fillRect(_row*10,_col*10,10,10);
        }
    }
}