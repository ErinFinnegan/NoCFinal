//Particles from the Nature of Code, Daniel Shiffman http://natureofcode.com

var s = function(sketch) {
  // an array of ParticleSystems
  var systems = [];
  var rainbow;

  sketch.setup = function() {
    //var text = createHTML("click to add particle systems");
    //text.position(10,365);
    //sketch.createCanvas(400, 300);
    //canvas.position(160, 125);
    //sketch.canvas.class("puke"); //I am not sure what the .class part does
    //canvas.style("position : relative;");  //this didn't work
    sketch.loadImage("./styles/rainbow.png");
  }

  sketch.draw = function() {
    for (var i = 0; i < systems.length; i++) {
      systems[i].addParticle();
      systems[i].run();
    }
    if (mouthopen == true) {
      mouthWasOpen();
    }
    // background(255);
  }

  sketch.mouthWasOpen = function() {
    sketch.systems.push(new ParticleSystem(1, new PVector((mouthX * .5), bottomlip)));
    //console.log('made it to the mouthWasOpen function');
    //console.log('toplip, bottomlip ' + toplip + ',' + bottomlip);
  }

  sketch.mousePressed = function() {
    sketch.console.log("mouse pressed!");
    sketch.console.log('mouseX, mouthX when clicked' + mouseX + ',' + mouthX);
  }
};
// was p5-canvas
var myp5 = new p5(s, 'overlay');