function Paddle(canvas) {
  this.DIMENSIONS = {height: 10, width: 75};
  this.position = (canvas.width - this.DIMENSIONS.width)/2;
  this.color = "#c0c0c0"
}

Paddle.prototype.draw = function(context) {
  context.beginPath();
  context.rect(this.position, canvas.height - this.DIMENSIONS.height,
    this.DIMENSIONS.width, this.DIMENSIONS.height);
  context.fillStyle = this.color;
  context.fill();
  context.closePath();
}

Paddle.prototype.updatePosition = function(canvas) {
  if(this.moveRight && this.position < canvas.width
     - this.DIMENSIONS.width) {
    this.position += 7;
  }
  else if(this.moveLeft && this.position > 0) {
    this.position -= 7;
  }
}

Paddle.prototype.reDraw = function(context, canvas) {
  this.draw(context);
  this.updatePosition(canvas);
}
