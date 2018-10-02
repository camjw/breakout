function Paddle() {
  this.paddleHeight = 10;
  this.paddleWidth = 75;
  this.paddleStart = (canvas.width - this.paddleWidth)/2;
}

Paddle.prototype.drawPaddle = function() {
  context.beginPath();
  context.rect(this.paddleStart, canvas.height  - this.paddleHeight, this.paddleWidth, this.paddleHeight);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
  if(this.moveRight && this.paddleStart < canvas.width - this.paddleWidth) {
    this.paddleStart += 7;
  }
  else if(this.moveLeft && this.paddleStart > 0) {
    this.paddleStart -= 7;
  }
}
