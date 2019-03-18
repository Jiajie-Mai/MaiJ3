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
var reqID, moving, whatM, increase = false;

var noCircle = false;

var animate = function(what) {
  window.cancelAnimationFrame(reqID);
  var w = pic.getAttribute('width');
  var h = pic.getAttribute('height');
  var dots = pic.children;
  var size = Number(dots[0].getAttribute('r'));
  var vels = new Array(dots.length);
  var x = new Array(dots.length);
  var y = new Array(dots.length);
  var color = ["brown","blue","red","orange","green","black","white","yellow","purple"]
  for (i = 0; i < dots.length; i++) {
    vels[i] = [1,1];
    x[i] = Number(dots[i].getAttribute('cx'));
    y[i] = Number(dots[i].getAttribute('cy'));
  }
  var anim = function() {
    for (curr = 0; curr < dots.length; curr++) {
      dots = pic.children;
      // console.log(dots)
      var replacer = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      if (what) {
        r = parseInt(dots[curr].getAttribute('r'));
        if (increase) {
          replacer.setAttribute('r', r + 1);
          if (r >= 10) {
            increase = false;
          }
        } else {
          replacer.setAttribute('r', r - 1);
          if (r <= 0) {
            increase = true;
          }
        }
        console.log(r + " " + increase)
      } else {
        replacer.setAttribute('r', 10);
      }
      replacer.setAttribute('fill', dots[curr].getAttribute('fill'));
      replacer.setAttribute('stroke', dots[curr].getAttribute('stroke'));
      replacer.setAttribute('cx', x[curr]);
      replacer.setAttribute('cy', y[curr]);
      replacer.addEventListener('click', function(e) {
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
      } )
      pic.replaceChild(replacer, dots[curr]);
      x[curr] += vels[curr][0];
      y[curr] += vels[curr][1];
      if (x[curr] + vels[curr][0] + size > w || x[curr] + vels[curr][0]<= 0) {
        vels[curr][0] *= -1;
      }
      if (y[curr] + vels[curr][1] + size > h || y[curr] + vels[curr][1]<= 0) {
        vels[curr][1] *= -1;
      }
    }
    reqID = window.requestAnimationFrame(anim);
  }
  anim();
}

//var stopIt = function

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
  window.cancelAnimationFrame(reqID);
  while (pic.hasChildNodes()) {
      pic.removeChild(pic.lastChild)
  }
  console.log("Cleared.")
})

move.addEventListener('click', function(e) {
  if (moving) {
    moving = false;
    window.cancelAnimationFrame(reqID);
  } else {
        moving = true;
    animate(false);
  }
  console.log("Moving.")
})

what.addEventListener('click', function(e) {
  if (whatM) {
    whatM = false;
    window.cancelAnimationFrame(reqID);
  } else {
    whatM = true;
    if (pic.children.length <= 1){
      animate(true);
      console.log("Doing special thing.");
    } else {
      console.log("Only one dot.");
    }
  }

})
