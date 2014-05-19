


function AnimationFuntion (_whichimage)  {

      var animation1;
      var whichimage = _whichimage;


      var totalframes = 8;


      function setup() {

        createCanvas(640, 360);
        background(255, 204, 0);
        frameRate(24);
        animation1 = new Animation(totalframes, 1, whichimage);

         animation1.preload(whichimage);



      }

      function draw() { 
          background(255, 204, 0);
          animation1.display(50, 20, 320, 300);
          // image(bacon, 150, 150, 200, 100);
          animation1.next();//pass to the next image 
      }


      function drawing(){ //how it draws 
        animation1.playing = !a.playing; //false then go back to the first drawing 
        animation1.imageIndex = 1; //go to the first image 
        
      }

      function Animation (_framex, _speed, _image)  {


        var framex = _framex;
        var imageName = _image;

        this.maxImages = framex;
        this.speed = _speed;//going through the array at this speed 
        this.imageIndex = 1;
        this.imageNameArray=[]; 

        this.playing = true;

      };

      ///////////////////PROTOTYPE

      Animation.prototype.preload = function(test) { //load this array of images

       var test1 = test;



          for (var i = 0; i < this.maxImages; i++){
          var index = i+1;  
          this.imageNameArray[i] = loadImage(  whichimage + "death/" + test1 + "death" + (index)+ ".png");

              console.log( whichimage + "death/" + test1 + "death" + (index)+ ".png");

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
        
        image(this.imageNameArray[floor(this.imageIndex)], Xpos, Ypos, W, H);//floor is used because the speed cannot be a float so what floor does is tell it draw it at one second OPP would be celling 

        }
}

AnimationFuntion("whichimage");

