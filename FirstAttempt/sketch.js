// The Nature of Code, Daniel Shiffman http://natureofcode.com


  var s = function( sketch ) {

      var videostarted = false;
      var vehicles = [];

  sketch.setup = function() {


      canvas = sketch.createCanvas(400, 300);
      canvas.class("p5canvas");   //references the HTML
        // We are now making random vehicles and storing them in an array
        for (var i = 0; i < 50; i++) {
          vehicles.push(new Vehicle(350,250));
        }
      }

   sketch.draw = function() {
    sketch.clear();
        
        for (var i = 0; i < vehicles.length; i++) {
          vehicles[i].applyBehaviors(vehicles);
          vehicles[i].update();
          vehicles[i].borders();
          vehicles[i].display(); 
          //oh right, they get displayed in draw...
        }

      }
 };

var myp5 = new p5(s, 'p5canvas');