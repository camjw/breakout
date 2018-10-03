function Paddle(canvas) {
  this.DIMENSIONS = {height: 10, width: 75};
  this.position = (canvas.width - this.DIMENSIONS.width)/2;

  this.draw = function(context) {
    context.beginPath();
    context.rect(this.position, canvas.height - this.DIMENSIONS.height,
      this.DIMENSIONS.width, this.DIMENSIONS.height);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  }

  this.updatePosition = function(canvas) {
    if(this.moveRight && this.position < canvas.width
       - this.DIMENSIONS.width) {
      this.position += 7;
    }
    else if(this.moveLeft && this.position > 0) {
      this.position -= 7;
    }
  }

  this.reDraw = function(context, canvas, direction) {
    this.draw(context);
    this.updatePosition(canvas, direction);
  }
}
