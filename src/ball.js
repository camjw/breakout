function Ball() {
  this.x = 5
  this.y = 5
  this.x_speed = 1
  this.y_speed = 1
  this.ballRadius = 7
}

Ball.prototype.updatePosition = function() {
  ball.x += ball.x_speed;
  ball.y += ball.y_speed;
  this.drawBall();
}

Ball.prototype.drawBall = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}

Ball.prototype.checkBallCollision = function() {
  if(this.x + this.x_speed > canvas.width - this.ballRadius ||
    this.x + this.x_speed < this.ballRadius) {
    this.x_speed = -this.x_speed;
  }

  if(this.y + this.y_speed < this.ballRadius) {
    this.y_speed = -this.y_speed;
  }
  if(this.x > paddle.paddleStart && this.x < paddle.paddleStart +
    paddle.paddleWidth && this.y > canvas.height - this.ballRadius -
    paddle.paddleHeight) {
    this.y_speed = -this.y_speed
  }
  else if(this.y + this.y_speed > canvas.height - this.ballRadius) {
    alert("GAME OVER");
    this.x = canvas.width / 2;
    this.y = canvas.height - 200;
    document.location.reload();
  }
}
