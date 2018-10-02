var canvas = document.getElementById("breakoutCanvas");
var context = canvas.getContext("2d");

ball = new Ball;
paddle = new Paddle;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode == 39) {
    paddle.moveRight = true;
  }
  else if(e.keyCode == 37) {
    paddle.moveLeft = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39) {
    paddle.moveRight = false;
  }
  else if(e.keyCode == 37) {
    paddle.moveLeft = false;
  }
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.updatePosition();
  paddle.drawPaddle();
  ball.checkBallCollision();
}

setInterval(draw, 10);
