/*
* Jiajie Mai
* SoftDev2 pd6
* K10: Ask Circles [Change || Die]
* 2019-03-13
*/

var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var move = document.getElementById("move");
var what = document.getElementById("what");

var noCircle = false;

pic.addEventListener('click', function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  var x = e.offsetX;
  var y = e.offsetY;

  c.addEventListener('click', function(e) {
    if (c.getAttribute("fill") == "green") {
      c.setAttribute("fill", "blue");
      c.setAttribute("cx", Math.round(Math.random() * 501));
      c.setAttribute("cy", Math.round(Math.random() * 501));
    } else {
      c.setAttribute("fill", "green");
    }
    noCircle = true;
  })

  if (!noCircle) {
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "10");
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
  }

  noCircle = false;

  console.log("Added point to (" + x + "," + y + ").")
  pic.appendChild(c);
})

clear.addEventListener('click', function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  c.setAttribute("x", 0);
  c.setAttribute("y", 0);
  c.setAttribute("width", 500);
  c.setAttribute("height", 500);
  c.setAttribute("fill", "white");
  pic.appendChild(c);
  console.log("Cleared.")
})

move.addEventListener('click', function(e) {
  console.log("Moving.")
})

what.addEventListener('click', function(e) {
  console.log("Doing special thing.")
})
