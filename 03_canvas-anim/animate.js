/*
Unicorns - Daniel Gelfand, Jabir Chowdhury, Jiajie Mai
SoftDev2 pd6
K#03 -- They lock us in the tower whenever we get caught
2019-02-06 W
*/
var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
var radius = 0;
var growing = true;
var reqID = 0;
var dotButton = document.getElementById('animate');
var stopButton = document.getElementById('stop');


var clear = function(e){
  ctx.clearRect(0,0, canvas.width,canvas.height);
};

var drawDot = function(event){

    //Fix this - event.preventDefault is not a function
    /*if(reqID != 0){
      event.preventDefault();
    }*/
    stopIt();
    clear();
    //draw the dot
    ctx.beginPath(); //begins path

    if(radius == 0){
      growing = true;
    }
    else if(radius == canvas.width/2 || radius == canvas.height/2){
      growing = false;
    }

    if(growing){
      radius += 1;
    }
    else{
      radius -= 1;
    }

    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0 ,2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "Cyan";
    ctx.fill();
    reqID = window.requestAnimationFrame(drawDot);
    console.log(reqID);
};

//stop the circle
var stopIt = function(){
    console.log( reqID );
    //alert("stopping");
    window.cancelAnimationFrame( reqID );
};

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
