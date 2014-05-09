// The Nature of Code, Daniel Shiffman http://natureofcode.com
//adapting example 6_08

  var s = function( sketch ) {

      var videostarted = false;
      var vehicles = [];
     // var yourScore = 0;
      var score = 0;

      var animation1;

      var name = "donut";
      var name2 = "donutdeath";

      var totalframes = 8;

  sketch.setup = function() {

      sketch.marshmallowghost = sketch.loadImage("styles/marshmallowghost.png");
      sketch.bacon = sketch.loadImage("styles/bacon.png");
      sketch.donut = sketch.loadImage("styles/donut.png");
      sketch.chicken = sketch.loadImage("styles/chicken.png");
      sketch.pacmanghost = sketch.loadImage("styles/pacmanghost.png"); 

      sketch.frameRate(24);
      sketch.animation1 = new Animation(totalframes, 1);

      sketch.animation1.preload(name2);

      canvas = sketch.createCanvas(640, 480);
      canvas.class("p5canvas");   //references the HTML
        // We are now making random vehicles and storing them in an array
         
        for (var i = 0; i < 10; i++) {
          var r = myp5.random(1);
          // // vehicles.push(new Vehicle(350,250));
             if (r < 0.5) {
              vehicles.push(new Vehicle(250,250));
              } else {
              vehicles.push(new ChildClass(350,250));
             }

        }
      console.log("vehicles.length  = " + vehicles.length);
      myp5.score = 0;
      }

   sketch.draw = function() {
    sketch.clear();

        
        for (var i = vehicles.length-1; i >= 0; i--) {

          vehicles[i].applyBehaviors(vehicles);
          vehicles[i].update();
          vehicles[i].borders();
          vehicles[i].display(); 

          if (!vehicles[i].isAlive){
            sketch.animation1.display((MouthCenterX - 50), (MouthCenterY - 50), 100, 100);
            soundEfx.play();
            //this is the part where I need to change the animation *********************
            sketch.animation1.next();//pass to the next image 
            vehicles.splice(i, 1);
            myp5.score = (myp5.score + 1);
            console.log('score = ' + myp5.score);

          }

         
        }

        if(mouthopen === true){
          myp5.fill(0,255,40);
        } else {  
          myp5.fill(250,25,120);
        }

       myp5.noStroke;
       myp5.ellipse((LeftsideOfmouthX-15), (LeftsideOfmouthY-15), 30, 30); //draws a cheek
       myp5.ellipse((RightsideOfmouthX+15), (RightsideOfmouthY-15), 30, 30); //draws a cheek
      }



 };

var myp5 = new p5(s, 'p5canvas');