function Paddle(canvas) {
  this.DIMENSIONS = {height: 10, width: 75};
  this.canvas = canvas
  this.context = this.canvas.getContext("2d");
  this.position = (this.canvas.width - this.DIMENSIONS.width)/2;
  this.color = "#c0c0c0"
}

Paddle.prototype.draw = function() {
  this.context.beginPath();
  this.context.rect(this.position, this.canvas.height - this.DIMENSIONS.height,
    this.DIMENSIONS.width, this.DIMENSIONS.height);
  this.context.fillStyle = this.color;
  this.context.fill();
  this.context.closePath();
}

Paddle.prototype.updatePosition = function() {
  if(this.moveRight && this.position < this.canvas.width
     - this.DIMENSIONS.width) {
    this.position += 7;
  }
  else if(this.moveLeft && this.position > 0) {
    this.position -= 7;
  }
}

Paddle.prototype.reDraw = function() {
  this.draw();
  this.updatePosition();
}
