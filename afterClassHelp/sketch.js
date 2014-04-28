// The Nature of Code, Daniel Shiffman http://natureofcode.com
//adapting example 6_08

  var s = function( sketch ) {

      var videostarted = false;
      var vehicles = [];
     // var yourScore = 0;
      var score = 0;

  sketch.setup = function() {

      sketch.marshmallowghost = sketch.loadImage("styles/marshmallowghost.png");
      sketch.bacon = sketch.loadImage("styles/bacon.png");
      sketch.donut = sketch.loadImage("styles/donut.png");
      sketch.chicken = sketch.loadImage("styles/chicken.png");
      sketch.pacmanghost = sketch.loadImage("styles/pacmanghost.png"); 
      canvas = sketch.createCanvas(400, 300);
      canvas.class("p5canvas");   //references the HTML
        // We are now making random vehicles and storing them in an array
        for (var i = 0; i < 5; i++) {
          vehicles.push(new Vehicle(350,250));
        }
      console.log("vehicles.length  = " + vehicles.length);
      myp5.score = 0;
      }

   sketch.draw = function() {
    sketch.clear();
         myp5.fill(250,25,120);
         myp5.noStroke;
         myp5.ellipse((LeftsideOfmouthX-15), (LeftsideOfmouthY-15), 20, 20); //draws a cheek
         myp5.ellipse((RightsideOfmouthX+15), (RightsideOfmouthY-15), 20, 20); //draws a cheek

        
        for (var i = vehicles.length-1; i >= 0; i--) {
          //vehicles[i].checkAlive() === true;
          vehicles[i].applyBehaviors(vehicles);
          vehicles[i].update();
          vehicles[i].borders();
          vehicles[i].display(); 
          // if (!ghosts[i].isAlive) {  //at Shiffman's suggestion
           // ghosts.splice(i, 1);
          if (!vehicles[i].isAlive){
            vehicles.splice(i, 1);
            //sketch.score = sketch.score + 1;
            //console.log("score = " + myp5.score);
            //console.log("yourScore = " + yourScore);
          }
          
         
        }
      }
 };

var myp5 = new p5(s, 'p5canvas');