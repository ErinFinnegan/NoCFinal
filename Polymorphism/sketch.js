// The Nature of Code, Daniel Shiffman http://natureofcode.com
//adapting example 6_08

  var s = function( sketch ) {

      var animation1; //not sure I need to put this here


      var videostarted = false;
      sketch.vehicles = [];
     // var yourScore = 0;
      var score = 0;

      var name = "donut";
      var name2 = "donutdeath";

      var totalframes = 8;

      var animation1;

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
         
        for (var i = 0; i < 5; i++) {
          var r = myp5.random(1);
          // // vehicles.push(new Vehicle(350,250));
             if (r < 0.5) {
              sketch.vehicles.push(new Vehicle(250,250));
              } else {
              sketch.vehicles.push(new ChildClass(350,250));
             }

        }
      console.log("sketch.vehicles.length  = " + sketch.vehicles.length);
      myp5.score = 0;
      }

   sketch.draw = function() {
    sketch.clear();

        
        for (var i = sketch.vehicles.length-1; i >= 0; i--) {

          sketch.vehicles[i].applyBehaviors(sketch.vehicles);
          sketch.vehicles[i].update();
          sketch.vehicles[i].borders();
          sketch.vehicles[i].display(); 

          if (!sketch.vehicles[i].isAlive){
       
               sketch.vehicles[i].die(); 
               soundEfx.play();
            // soundEfx.play();
            // sketch.animation1.display((MouthCenterX - 50), (MouthCenterY - 50), 100, 100); //display the animation
            // //this is the part where I need to change the animation *********************
            // sketch.animation1.next();//pass to the next image 
            vehicles.splice(i, 1);
            // myp5.score = (myp5.score + 1);
            // console.log('score = ' + myp5.score);

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