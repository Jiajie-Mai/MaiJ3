/*
Jiajie Mai
SoftDev2 pd6
K01-...and I want to Paint It Better
2019-01-31
*/

//variables for the canvas, canvas attributes, buttons, etc.
var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var w = c.getAttribute("width");
var h = c.getAttribute("height");
var clr = document.getElementById('clr');
var tog = document.getElementById('tog');
//state variable
var rect = 1;

//add event listener for clear button and clear canvas as well as a console log
clr.addEventListener(
    "click",
    function(){
	ctx.clearRect(0,0,w,h);
	console.log("Cleared canvas.");
    }
)

//add event listener for the toggle button to change between modes and a console log to signify the changes
tog.addEventListener(
    "click",
    function(){
	if(rect == 1){
	    rect = 0;
	    console.log("Dot mode is on.");
	} else {
	    rect = 1;
	    console.log("Rectangle mode is on.");
	}
    }
)

//add event listener to the canvas to react to clicks and add the corresponding chape
c.addEventListener(
    "click",
    function(event){
	//random color although sadly up to 9 for each digit and not 16
	var color = "#" + Math.floor(Math.random() * 100) + "" + Math.floor(Math.random() * 100) + "" + Math.floor(Math.random() * 100);
	ctx.fillStyle = color;
	console.log("color:" + color);
	//finds the place of the cursor
	var x = event.clientX - c.offsetLeft - 5;
	var y = event.clientY - c.offsetTop - 5;
	//checks the state
	if(rect == 1){
	    //makes a rectangle of width of 6 and a height of 8
	    ctx.fillRect(x,y,12,16);
	} else {
	    //stops previous point from making a line inbetween each of the points
	    ctx.beginPath();
	    //makes a circle of radius 5
	    ctx.ellipse(x,y,5,5,Math.PI / 4, 0, 2 * Math.PI);
	    ctx.fill();
	}
	console.log( "(" + x + "," + y + ")" );
    }
)
