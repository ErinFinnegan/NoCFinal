

var animation1;

var name = "donut";
var name2 = "donutdeath";

var totalframes = 8;


function setup() {

 // createCanvas(640, 360);
 // background(255, 204, 0);
  frameRate(24);
  animation1 = new Animation(totalframes, 1);

  animation1.preload(name2);

  donut = loadImage("donut.png");

}

function draw() { 
  //  background(255, 204, 0);
    animation1.display(50, 20, 320, 300);
    animation1.next();//pass to the next image 
}


function drawing(){ //how it draws 
  animation1.playing = !a.playing; //false then go back to the first drawing 
  animation1.imageIndex = 1; //go to the first image 
  
}

function Animation (_framex, _speed)  {


  var framex = _framex;
  this.maxImages = framex;
  this.speed = _speed;//going through the array at this speed 
  this.imageIndex = 1;
  this.donutArray=[];
  this.playing = true;

};

///////////////////PROTOTYPE

Animation.prototype.preload = function(test) { //load this array of images

var test1 = test;

  for (var i = 0; i < this.maxImages; i++){
    var index = i+1;  // image files start at 1, not 0
    this.donutArray[i] = loadImage( "donutdeath/" + test1  + (index)+ ".png");
  }
}

Animation.prototype.next = function() { //go through this loop
  if (this.playing) {
    this.imageIndex = (this.imageIndex + this.speed);
    
    if (this.imageIndex >= this.maxImages) {
      this.imageIndex -= this.maxImages;//loop back to the first image
    }
    
  }
}

Animation.prototype.display = function(_Xpos, _Ypos, _W, _H) { //display like this
var Xpos = _Xpos;
var Ypos = _Ypos;
var W = _W;
var H = _H;
  
  image(this.donutArray[floor(this.imageIndex)], Xpos, Ypos, W, H);//floor is used because the speed cannot be a float so what floor does is tell it draw it at one second OPP would be celling 
  }
