var ary2d=[
    [1,2,3], //index 0
    [4,5,6], //index 1
    [7,8,9]  //index 2
];
//row
ary2d[1][2]
var Ans=[0,1,2,3,4,5,6,7,8,9];

//Dynamic
var row=9, col=7;
var dynaAry2d=[];
for(var _row=0;_row<row;_row++){
    dynaAry2d.push([]);
    for(var _col=0;_col<col;_col++){
        dynaAry2d[_row].push(_col+_row*col);
    }
}