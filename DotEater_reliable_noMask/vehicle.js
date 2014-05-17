// The Nature of Code, Daniel Shiffman http://natureofcode.com
//adapting example 6_08

// Vehicle object
//var log = false; //not sure what that does


	function Vehicle(x, y) {
	  //var isAlive = new Boolean(true);
	  this.isAlive = true;
	  // All the usual stuff
	  this.position = new PVector(x, y);
	  this.r = 20;  //the width of the elipse
	  this.maxspeed = 3;    // Maximum speed  13 is too high
	  this.maxforce = 0.2;  // Maximum steering force was .2
	  this.acceleration = new PVector(0, 0);
	  this.velocity = new PVector(0, 0);
	}


	Vehicle.prototype.applyBehaviors = function(vehicles) {
	   var separateForce = this.separate(vehicles);
	   var seekForce = this.seek(new PVector(mouthX,bottomlip));
	   separateForce.mult(4);  //how fast do they run away
	   seekForce.mult(1);
	   this.applyForce(separateForce);
	   if (videostarted = true && mouthopen == false){ 
	   this.applyForce(seekForce);
	   //console.log("go for the face!")
		} else {
			seekForce = this.seek(new PVector(0,0));
			//console.log("Avoid the face!")
			seekForce.mult(200);  //make them avoid the face faster!!
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
		  this.acceleration.mult(0);
		     if(mouthopen === true && (this.position.y < (bottomlip + 10)) && (this.position.y > (bottomlip-10))) {
		     	if ((this.position.x <= (mouthX + 10)) && (this.position.x >= (mouthX - 10))){
		    		 this.isAlive = false;
		    		 //console.log(eval(this.isAlive));
			   		 //myp5.fill(0,255,0);
			   		 //yourScore++;
			   		 //console.log("yourScore " + yourScore);
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
	 	myp5.ellipse(0, 0, this.r, this.r);
	 	//myp5.fill(255,0,0);
	 }
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
	

	}

