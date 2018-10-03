var canvas = document.getElementById("breakoutCanvas");
var context = canvas.getContext("2d");

ball = new Ball();
paddle = new Paddle(canvas);
bricks = new Bricks();

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
//
// function collisionDetection() {
//     for(var c=0; c<brickColumnCount; c++) {
//         for(var r=0; r<brickRowCount; r++) {
//             var b = bricks[c][r];
//             if(ball.psx > b.x && ball.x < b.x+brickWidth && ball.y > b.y && ball.y < b.y+brickHeight) {
//                 ball.speed_y = -ball.speed_y;
//             }
//         }
//     }
// }

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.reDraw(context);
  bricks.reDraw(context)
  // collisionDetection();
  paddle.reDraw(context, canvas, );
  ball.checkCollisions(canvas);
}

setInterval(draw, 10);


//
// if(this.position.x > paddle.paddleStart
//   && this.position.x < paddle.paddleStart + paddle.paddleWidth
//   && this.position.y > canvas.height - this.RADIUS - paddle.paddleHeight) {
//   this.velocity.y = -this.velocity.y
// }
//
// else if(this.position.y + this.velocity.y > canvas.height - this.RADIUS) {
//   this.gameOver = true
//   this.position.x = canvas.width / 2;
//   this.position.y = canvas.height - 200;
//   document.location.reload();
// }
