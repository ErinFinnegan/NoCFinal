// The Nature of Code, Daniel Shiffman, http://natureofcode.com

// Child class constructor
var ChildClass = function(position) {
  Vehicle.call(this, position);
};

// Inherit from the parent class
ChildClass.prototype = Object.create(Vehicle.prototype);
ChildClass.prototype.constructor = ChildClass;

// Override the display method
  ChildClass.prototype.display = function() {
  //this is where the prototypes get displayed... how do we stop displaying one at a time?
    myp5.stroke(255, 255, 255);
    myp5.strokeWeight(1);
    myp5.pushMatrix();
    myp5.translate(this.position.x, this.position.y);
    //color was here
   //myp5.ellipse(0, 0, 64,64);
    // myp5.imageMode(myp5.CENTER);
    // if(display_image === 1) {
        myp5.image(myp5.bacon, 0,0, 100, 50);
      // } else if (display_image === 2) {
      //   myp5.image(myp5.donut, 0,0, 100, 100);
      // } else if (display_image === 3) {
      //   myp5.image(myp5.chicken, 0,0, 50, 50);
      // } else if (display_image === 4) {
      //   myp5.image(myp5.pacmanghost, 0,0, 50, 50);
      // } else if (display_image === 0){
      //   myp5.image(myp5.marshmallowghost, -50,-40, 110, 110);
      // }
   if (!this.isAlive) {
    myp5.fill(255,0,0,100);
      //myp5.ellipse(0, 0, 64,64);

    // myp5.image(myp5.marshmallowghost, 0, 0, this.r, this.r);
    //myp5.image(myp5.marshmallowghost, 0, 0, 80, 80);
    //myp5.fill(255,0,0);
   }



   //if this is dead, delete it from the array************************
   myp5.popMatrix();

  }