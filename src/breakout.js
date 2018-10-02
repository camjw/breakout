var canvas = document.getElementById("breakoutCanvas");
var context = canvas.getContext("2d");

ball = new Ball();
paddle = new Paddle();

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

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(ball.x > b.x && ball.x < b.x+brickWidth && ball.y > b.y && ball.y < b.y+brickHeight) {
                ball.speed_y = -ball.speed_y;
            }
        }
    }
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.updatePosition();
  collisionDetection();
  paddle.drawPaddle();
  ball.checkBallCollision();
  drawBricks();
}

setInterval(draw, 10);
