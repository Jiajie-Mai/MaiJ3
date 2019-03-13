/*
 * Jiajie Mai
 * SoftDev2 pd6
 * K09: Connect the Dots
 * 2019-03-12
 */

var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var cleared = true;
var lx;
var ly;

var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

clear.addEventListener('click', function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    c.setAttribute("x", 0);
    c.setAttribute("y", 0);
    c.setAttribute("width", 500);
    c.setAttribute("height", 500);
    c.setAttribute("fill", "white");
    pic.appendChild(c);
    console.log("Cleared.")
    cleared = true;
})

pic.addEventListener('click', function(e) {
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  var x = e.offsetX
  var y = e.offsetY
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", "5");
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  console.log("Added point to (" + x + "," + y + ").")
  pic.appendChild(c);
  if (cleared == false) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", lx);
    line.setAttribute("y1", ly);
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
    line.setAttribute("style", "stroke: black;")
    console.log("Added line from to (" + lx + "," + ly + ") to (" + x + "," + y + ").")
    pic.appendChild(line)
  }
  lx = x;
  ly = y;
  cleared = false;
})
