var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var w = c.getAttribute("width");
var h = c.getAttribute("height");
var clr = document.getElementById('clr');
var tog = document.getElementById('tog');

var rect = true;

clr.addEventListener(
    "click",
    function(){
	ctx.clearRect(0,0,w,h);
	console.log("Cleared canvas.");
    }
)


tog.addEventListener(
    "click",
    function(){
	if(rect){
	    rect = false;
	    console.log("Dot mode is on.");
	} else {
	    rect = true;
	    console.log("Rectangle mode is on.");
	}
    }
)

c.addEventListener(
    "click",
    function(){
	var x = event.clientX;
	var y = event.clientY;
	console.log( "(" + x + "," + y + ")" );
	if(rect){
	    ctx.fillRect(x-10,y-10,10,10);
	} else {
	    ctx.ellipse(x-5,y-5,5,5,Math.PI / 4, 0, 2 * Math.PI);
	    ctx.fill();
	}
	ctx.stroke();
	ctx.closePath();
    }
)
