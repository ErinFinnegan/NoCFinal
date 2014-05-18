// The Nature of Code, Daniel Shiffman, http://natureofcode.com

// Child class constructor
var DonutClass = function(position) {
  Vehicle.call(this, position);
};

// Inherit from the parent class
DonutClass.prototype = Object.create(Vehicle.prototype);
DonutClass.prototype.constructor = DonutClass;

// Override the display method
  DonutClass.prototype.display = function() {
    // console.log("made it to donut prototype update");
  //this is where the prototypes get displayed... 

  myp5.whichArray = myp5.chickenArray;

    myp5.stroke(255, 255, 255);
    myp5.strokeWeight(1);
    myp5.pushMatrix();
    myp5.translate(this.position.x, this.position.y);
    //color was here
   //myp5.ellipse(0, 0, 64,64);
        myp5.image(myp5.donut, 0,0, 105, 105);

   if (!this.isAlive) {
    myp5.fill(255,0,0,100);
      //myp5.ellipse(0, 0, 64,64);

   }



   //if this is dead, delete it from the array************************
   myp5.popMatrix();

  }