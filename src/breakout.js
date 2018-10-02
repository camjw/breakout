var canvas = document.getElementById("breakoutCanvas");
var context = canvas.getContext("2d");
var ballRadius = 7
var x = canvas.width/2;
var y = canvas.height-200;
var dx = 1;
var dy = 1;

function drawBall() {
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI*2);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall()
  x += dx;
  y += dy;
  
  if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
}
setInterval(draw, 10);
