
//this sprite animation is adapted from Sharon Lee De La Cruz: http://unoseistres.com/javascript/comic/comic.html




function Animation (_framex, _speed)  {


  var framex = _framex;
  this.maxImages = framex;
  this.speed = _speed;//going through the array at this speed 
  this.imageIndex = 1;
  this.donutArray=[];
  this.chickenArray=[];
  this.baconArray=[];
  this.pacmanghostArray=[];
  this.playing = true;

};

///////////////////PROTOTYPE

Animation.prototype.preload = function(test) { //load this array of images

var test1 = test;

  for (var i = 0; i < this.maxImages; i++){
    var index = i+1;  // image files start at 1, not 0
    this.donutArray[i] = myp5.loadImage( "donutdeath/" + test1  + (index)+ ".png");
    this.chickenArray[i] = myp5.loadImage( "styles/chickendeath/" + test1  + (index)+ ".png");
    this.baconArray[i] = myp5.loadImage( "styles/bacondeath/" + test1  + (index)+ ".png");
    this.pacmanghostArray[i] = myp5.loadImage( "styles/pacmanghostdeath/" + test1  + (index)+ ".png");
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
  
  myp5.image(this.donutArray[myp5.floor(this.imageIndex)], Xpos, Ypos, W, H);//floor is used because the speed cannot be a float so what floor does is tell it draw it at one second OPP would be celling 
  }
