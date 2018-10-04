function Game() {
  canvas = document.getElementById('breakoutCanvas');
  context = canvas.getContext("2d");
  ball = new Ball();
  bricks = new Bricks();
  paddle = new Paddle(canvas);

  this.canvas = canvas;
  this.context = context;
  this.ball = ball;
  this.bricks = bricks;
  this.paddle = paddle;

}

Game.prototype.collisionDetection = function() {
  for (var r = 0; r < this.bricks.brickArray.length; r++) {
    for (var c = 0; c < this.bricks.brickArray[r].length; c++) {
      if (this.ball.position.x > this.bricks.brickArray[r][c].x &&
        this.ball.position.x < this.bricks.brickArray[r][c].x + this.bricks.BRICK_SIZE.width &&
        this.ball.position.y > this.bricks.brickArray[r][c].y &&
        this.ball.position.y < this.bricks.brickArray[r][c].y + this.bricks.BRICK_SIZE.height &&
        this.bricks.brickArray[r][c].display) {
          this.ball.velocity.y = -this.ball.velocity.y;
          this.bricks.brickArray[r][c].display = false;
        }
      }
    }
  }

Game.prototype.run = function() {

	// Clear the canvas.
	context.clearRect(0, 0, this.canvas.width, this.canvas.height);

	// Draw the ball.
  this.ball.checkCollisions(canvas);
  this.ball.reDraw(context);

  // Draw the paddle.
  this.paddle.reDraw(context, canvas)

  // Draw the bricks.
  this.bricks.reDraw(context)

}
