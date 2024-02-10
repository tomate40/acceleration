var myGamePiece;
var sim = false;

var valueV = 0;
var valueA = 0;

var time = 0;

function start() {
  sim = true;
}

function stop() {
  sim = false;
}


function startGame() {
  myGamePiece = new component(30, 30, "red", 500, 320);
  myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 1000;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.context.rect(-500, -250, 1000, 100);
    this.context.fill();
    this.interval = setInterval(updateGameArea, 20);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;    
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x = 500 + (valueV*time) + (0.5*valueA*time*time);
  }    
}

function updateGameArea() {
  myGameArea.clear();
  if (sim) {
    time += 0.02; 
    myGamePiece.newPos();
    console.log("adf");
  }
  myGameArea.context.fillStyle = "black";
  myGameArea.context.fillRect(0, 350, 1000, 5);
  

  myGamePiece.update();
}


var sliderV = document.getElementById("R-Vitesse");
var outputV = document.getElementById("V");
outputV.innerHTML = sliderV.value;
valueV = sliderV.value;

sliderV.oninput = function() {
  outputV.innerHTML = this.value;
  valueV = this.value;
}

var sliderA = document.getElementById("R-Acceleration");
var outputA = document.getElementById("A");
outputA.innerHTML = sliderA.value;
valueA = sliderA.value;

sliderA.oninput = function() {
  outputA.innerHTML = this.value;
  valueA = this.value;
  console.log(valueA);
}
