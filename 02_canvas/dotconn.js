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

//add event listener for clear button and clear canvas as well as a console log
clr.addEventListener(
    "click",
    function(){
	ctx.clearRect(0,0,w,h);
	console.log("Cleared canvas.");
    }
}

//add event listener to the canvas to react to clicks and add the corresponding chape
c.addEventListener(
    "click",
    function(event){
	//random color although sadly up to 9 for each digit and not 16
	var color = "#" + Math.floor(Math.random() * 1000000);
	ctx.fillStyle = color;
	console.log("color:" + color);
	
	//finds the place of the cursor
	var x = event.clientX - c.offsetLeft;
	var y = event.clientY - c.offsetTop;

	//previous x and y
	var prevX;
	var prevY;
	
	//makes a circle of radius 5
	ctx.ellipse(x,y,5,5,Math.PI / 4, 0, 2 * Math.PI);
	ctx.fill();

	if(prevX != "undefined"){
	    if(prevY == "undefined") {
		console.log("Y has a value, but X doesn't. ???");
	    } else {

	    }
	}
	    

	prevX = x;
	prevY = y;
	    
	console.log( "(" + x + "," + y + ")" );
    }
)
