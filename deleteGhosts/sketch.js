// The Nature of Code, Daniel Shiffman http://natureofcode.com
//adapting example 6_08

  var s = function( sketch ) {

      var videostarted = false;
      var vehicles = [];

  sketch.setup = function() {

      sketch.marshmallowghost = sketch.loadImage("styles/marshmallowghost.png");
      canvas = sketch.createCanvas(400, 300);
      canvas.class("p5canvas");   //references the HTML
        // We are now making random vehicles and storing them in an array
        for (var i = 0; i < 20; i++) {
          vehicles.push(new Vehicle(350,250));
        }
      console.log("vehicles.length  = " + vehicles.length);
      }

   sketch.draw = function() {
    sketch.clear();
         myp5.fill(250,25,120);
         myp5.noStroke;
         myp5.ellipse((LeftsideOfmouthX-15), (LeftsideOfmouthY-15), 20, 20);
         myp5.ellipse((RightsideOfmouthX+15), (RightsideOfmouthY-15), 20, 20);

        
        for (var i = 0; i < vehicles.length; i++) {
          //vehicles[i].checkAlive() === true;
          vehicles[i].applyBehaviors(vehicles);
          vehicles[i].update();
          vehicles[i].borders();
          vehicles[i].display(); 
          // if (!ghosts[i].isAlive) {  //at Shiffman's suggestion
           // ghosts.splice(i, 1);
          if (!vehicles[i].isAlive){
            vehicles.splice(i, 1);
            console.log("yourscore = " + vehicles.length);
          }
          
         
        }
      }
 };

var myp5 = new p5(s, 'p5canvas');