function Game() {
  canvas = document.getElementById('breakoutCanvas');
  context = canvas.getContext("2d");

  ball = new Ball();
  bricks = new Bricks();
  paddle = new Paddle(canvas);

  this.ball = ball
  this.canvas = canvas;
  this.context = context;
  this.bricks = bricks;
  this.paddle = paddle;

}

Game.prototype.brickBallCollisionDetection = function() {
  for (var r = 0; r < this.bricks.brickArray.length; r++) {
    for (var c = 0; c < this.bricks.brickArray[r].length; c++) {
      if (this.ball.position.x > this.bricks.brickArray[r][c].x
        && this.ball.position.x < this.bricks.brickArray[r][c].x + this.bricks.BRICK_SIZE.width
        && this.ball.position.y > this.bricks.brickArray[r][c].y
        && this.ball.position.y - this.ball.RADIUS - this.ball.velocity.y < this.bricks.brickArray[r][c].y + this.bricks.BRICK_SIZE.height
        && this.bricks.brickArray[r][c].display) {
          this.ball.velocity.y = -this.ball.velocity.y;
          this.bricks.brickArray[r][c].display = false;
      }
      if (this.ball.position.x > this.bricks.brickArray[r][c].x
        && this.ball.position.x < this.bricks.brickArray[r][c].x + this.bricks.BRICK_SIZE.width
        && this.ball.position.y < this.bricks.brickArray[r][c].y
        && this.ball.position.y + this.ball.RADIUS + this.ball.velocity.y > this.bricks.brickArray[r][c].y + this.bricks.BRICK_SIZE.height
        && this.bricks.brickArray[r][c].display) {
          this.ball.velocity.y = -this.ball.velocity.y;
          this.bricks.brickArray[r][c].display = false;
      }
      if (this.ball.position.y > this.bricks.brickArray[r][c].y
        && this.ball.position.y < this.bricks.brickArray[r][c].y + this.bricks.BRICK_SIZE.height
        && this.ball.position.x > this.bricks.brickArray[r][c].x
        && this.ball.position.x - this.ball.RADIUS + this.ball.velocity.x < this.bricks.brickArray[r][c].x + this.bricks.BRICK_SIZE.width
        && this.bricks.brickArray[r][c].display) {
          this.ball.velocity.x = -this.ball.velocity.x;
          this.bricks.brickArray[r][c].display = false;
      }
      if (this.ball.position.y > this.bricks.brickArray[r][c].y
        && this.ball.position.y < this.bricks.brickArray[r][c].y + this.bricks.BRICK_SIZE.height
        && this.ball.position.x < this.bricks.brickArray[r][c].x
        && this.ball.position.x + this.ball.RADIUS - this.ball.velocity.x > this.bricks.brickArray[r][c].x + this.bricks.BRICK_SIZE.width
        && this.bricks.brickArray[r][c].display) {
          this.ball.velocity.x = -this.ball.velocity.x;
          this.bricks.brickArray[r][c].display = false;
      }
    }
  }
}

Game.prototype.ballPaddleCollisionDetection = function() {
  if (this.ball.position.x + this.ball.RADIUS > this.paddle.position
    && this.ball.position.x < this.paddle.position + this.paddle.DIMENSIONS.width
    && this.ball.position.y + this.ball.RADIUS > this.canvas.height - this.paddle.DIMENSIONS.height) {
      this.ball.velocity.y = -this.ball.velocity.y
      console.log('tick')
    }
}

Game.prototype.isGameOver = function() {
  if (this.ball.position.y + this.ball.RADIUS + this.ball.velocity.y > this.canvas.height) [
    console.log('game over')
  ]
}

Game.prototype.isGameWon = function() {
  for (var r = 0; r < this.bricks.brickArray.length; r++) {
    for (var c = 0; c < this.bricks.brickArray[r].length; c++) {
      if (this.bricks.brickArray[r][c].display) {
        return false
      }
    }
  }
  console.log('Game won')
  return true
}

Game.prototype.log = function() {
  console.log(10)
}

Game.prototype.run = function() {

	// Clear the canvas.
	context.clearRect(0, 0, this.canvas.width, this.canvas.height);

	// Draw the ball.
  this.ball.checkCollisions(canvas);
  this.ball.reDraw(context);

  // Draw the paddle.
  this.paddle.reDraw(context, canvas);

  // Draw the bricks.
  this.bricks.reDraw(context);

}
