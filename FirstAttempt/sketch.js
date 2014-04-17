// The Nature of Code, Daniel Shiffman http://natureofcode.com



  
  var s = function( sketch ) {
  

  // an array of ParticleSystems
  var systems = [];
  var canvas;


  sketch.setup = function() {
    mydefault = myp5.ellipse;
    //sketch._money = sketch.loadImage("styles/quarter.png");   
    canvas = sketch.createCanvas(400, 300);
    canvas.class("p5canvas");   //references the HTML

  }

  sketch.draw = function() {
    sketch.clear();
    //sketch.background(0,255,0);
  
    if (mouthopen === true) {
       console.log("mouthX, bottomlip " + mouthX + " , " + bottomlip);
	    }  
    
    sketch.fill(255,0,0);

  }

};
// If its coming from outside the sketch you can use p5.thing, but inside the sketch its sketch.thing

var myp5 = new p5(s, 'p5canvas');