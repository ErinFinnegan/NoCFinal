// The Nature of Code, Daniel Shiffman http://natureofcode.com
//adapting example 6_08

// Vehicle object
//var log = false; //not sure what that does


	function Vehicle(x, y) {
	  //var isAlive = new Boolean(true);
	  this.isAlive = true;
	  // All the usual stuff
	  this.position = new PVector(x, y);
	  //this.r = 20;  //the width of the elipse
	  this.r = 80;  //a good width for the ghost
	  this.maxspeed = 4;    // Maximum speed  13 is too high
	  this.maxforce = 0.2;  // Maximum steering force was .2
	  this.acceleration = new PVector(0, 0);
	  this.velocity = new PVector(0, 0);
	}


	Vehicle.prototype.applyBehaviors = function(vehicles) {
	   var separateForce = this.separate(vehicles);
	   var seekForce = this.seek(new PVector(mouthX,bottomlip));
	   //separate Force is better on 4 for the ellipses, but lower for the ghosts
	   separateForce.mult(1);  //how fast do they run away
	   seekForce.mult(1);
	   this.applyForce(separateForce);
	   if (videostarted = true && mouthopen == false){ 
	   this.applyForce(seekForce);
	   //console.log("go for the face!")
		} else {
			seekForce = this.seek(new PVector(0,0));
			//console.log("Avoid the face!")
			seekForce.mult(80);  //make them avoid the face faster!!
		}
	}
	   //if the mouth is closed, seek the nearest jaw line parameter
	   //if the mouth is open, get as far away as possible
	   //if you're eaten, disappear (stop displaying?) and user gets a point 
	

	Vehicle.prototype.applyForce = function(force) {
	  // We could add mass here if we want A = F / M
	  this.acceleration.add(force);
	}

	// Separation
	// Method checks for nearby vehicles and steers away
	Vehicle.prototype.separate = function(vehicles) {
	   var desiredseparation = this.r*2;
	  //var desiredseparation = 50;  //tried it without this.r
	  var sum = new PVector();
	  var count = 0;
	  // For every boid in the system, check if it's too close
	  for (var i = 0; i < vehicles.length; i++) {
	    var d = PVector.dist(this.position, vehicles[i].position);
	    // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
	    if ((d > 0) && (d < desiredseparation)) {
	      // Calculate vector pointing away from neighbor
	      var diff = PVector.sub(this.position, vehicles[i].position);
	      diff.normalize();
	      diff.div(d);        // Weight by distance
	      sum.add(diff);
	      count++;            // Keep track of how many
	    }
	    

	  }
	  // Average -- divide by how many
	  if (count > 0) {
	    sum.div(count);
	    // Our desired vector is the average scaled to maximum speed
	    sum.normalize();
	    sum.mult(this.maxspeed);
	    // Implement Reynolds: Steering = Desired - Velocity
	    sum.sub(this.velocity);
	    sum.limit(this.maxforce);
	  }
	  return sum;
	}

	    // A method that calculates a steering force towards a target
	  // STEER = DESIRED MINUS VELOCITY
	Vehicle.prototype.seek = function(target) {
	  var desired = PVector.sub(target,this.position);  // A vector pointing from the location to the target
	  
	  // Normalize desired and scale to maximum speed
	  desired.normalize();
	  desired.mult(this.maxspeed);
	  // Steering = Desired minus velocity
	  var steer = PVector.sub(desired,this.velocity);
	  steer.limit(this.maxforce);  // Limit to maximum steering force    
	  return steer;
	}

	// Method to update location
	Vehicle.prototype.update = function() {
		  // Update velocity
		  this.velocity.add(this.acceleration);
		  // Limit speed
		  this.velocity.limit(this.maxspeed);
		  this.position.add(this.velocity);
		  // Reset accelertion to 0 each cycle
		  this.acceleration.mult(0);  //the next part is where the targetting happens

		  // targeting for ghost images:
		    if(mouthopen === true && (this.position.y < (bottomlip + 30)) && (this.position.y > (bottomlip-30))) {
		    	if ((this.position.x < (mouthX + 30)) && (this.position.x > (mouthX - 30))){

		    		 this.isAlive = false;
		    		 //console.log(eval(this.isAlive));

			    }
		    }
		    	else {
				  //myp5.fill(0, 0, 255);
				  //console.log("blue is " + eval(this.isAlive));
			    	}
    
		}


	Vehicle.prototype.display = function() {
	//this is where the prototypes get displayed... how do we stop displaying one at a time?
	  myp5.stroke(255, 255, 255);
	  myp5.strokeWeight(1);
	  myp5.pushMatrix();
	  myp5.translate(this.position.x, this.position.y);
	  //color was here
	 myp5.fill(0,0,255);
	 if (this.isAlive) {
	 	//myp5.ellipse(0, 0, this.r, this.r);
		// myp5.image(myp5.marshmallowghost, 0, 0, this.r, this.r);
		//myp5.image(myp5.marshmallowghost, 0, 0, 80, 80);
		  // if(display_image === 1) {
			 //    myp5.image(myp5.bacon, this.position.x, this.position.y, 100, 50);
			 //  } else if (display_image === 2) {
			 //    myp5.image(myp5.donut, this.position.x, this.position.y, 50, 50);
			 //  } else if (display_image === 3) {
			 //    myp5.image(myp5.chicken, this.position.x, this.position.y, 50, 50);
			 //  } else if (display_image === 4) {
			 //    myp5.image(myp5.pacmanghost, this.position.x, this.position.y, 50, 50);
			 //    } else if (display_image === 0){
		  //    	myp5.image(myp5.marshmallowghost, 0, 0, 80, 80);
			   
			 //  }

	  		  if(display_image === 1) {
			    myp5.image(myp5.bacon, this.position.x, this.position.y, 100, 50, this.r, this.r);
			  } else if (display_image === 2) {
			    myp5.image(myp5.donut, this.position.x, this.position.y, 50, 50, this.r, this.r);
			  } else if (display_image === 3) {
			    myp5.image(myp5.chicken, this.position.x, this.position.y, 50, 50, this.r, this.r);
			  } else if (display_image === 4) {
			    myp5.image(myp5.pacmanghost, this.position.x, this.position.y, 50, 50, this.r, this.r);
			    } else if (display_image === 0){
		     	myp5.image(myp5.marshmallowghost, this.position.x, this.position.y, 0, 0, this.r, this.r);
			   
			  }
	 	//myp5.fill(255,0,0);
	 }
	 //if this is dead, delete it from the array************************
	 myp5.popMatrix();
		
	}

	// Wraparound
	Vehicle.prototype.borders = function() {
	 var width = myp5.width;
	 var height = myp5.height;
	  if (this.position.x < -this.r) this.position.x =  width+this.r;
	  if (this.position.y < -this.r) this.position.y = height+this.r;
	  if (this.position.x >  width+this.r) this.position.x = -this.r;
	  if (this.position.y > height+this.r) this.position.y = -this.r;

	  // if (this.position.x < -this) this.position.x =  width+this;
	  // if (this.position.y < -this) this.position.y = height+this;
	  // if (this.position.x >  width+this) this.position.x = -this;
	  // if (this.position.y > height+this) this.position.y = -this;
	

	}

