/*
Jiajie Mai
SoftDev2 pd6
K02-
2019-02-01
*/

//variables for the canvas, canvas attributes, buttons, etc.
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var w = c.getAttribute("width");
var h = c.getAttribute("height");
var clr = document.getElementById('clear');
//previous x and y
var prevX = null;
var prevY = null;
var cleared = true;

//add event listener for clear button and clear canvas as well as a console log
clr.addEventListener(
    "click",
    function(){
	ctx.clearRect(0,0,w,h);
	console.log("Cleared canvas.");
	var prevX = null;
	var prevY = null;
	cleared = true;
	console.log(prevX + ":" + prevY);
    }
)

//add event listener to the canvas to react to clicks and add the corresponding chape
c.addEventListener(
    "click",
    function(event){
	//random color although sadly up to 9 for each digit and not 16
	var color = "#" + Math.floor(Math.random() * 1000000);
	ctx.fillStyle = color;
	console.log("color:" + color);
	
	//finds the place of the cursor
	var x = event.clientX - c.offsetLeft - 5;
	var y = event.clientY - c.offsetTop - 5;
	
	//makes a circle of radius 5
	ctx.beginPath();
	ctx.ellipse(x,y,5,5,Math.PI / 4, 0, 2 * Math.PI);
	ctx.fill();

	//checks for previous values and if not it does accordingly
	if(prevX == null || cleared){
	    console.log(prevX + ":" + prevY);
	}else{
	    //draws a line
	    ctx.beginPath();
	    ctx.moveTo(prevX,prevY);
	    ctx.lineTo(x,y);
	    ctx.stroke();
	    console.log(prevX + "," + prevY + ":" + x + "," + y);
	    //sets prevX and prevY
	}
	prevX = x;
	prevY = y;
	cleared = false;
    }
)
