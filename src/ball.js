function Ball() {
  this.position = { x: 200, y: 150 }
  this.velocity = { x: 1, y: 1 }
  this.RADIUS = 7

  this.updatePosition = function() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  this.draw = function(context) {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.RADIUS, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  }

  this.reDraw = function(context) {
    this.updatePosition();
    this.draw(context);
  }

  this.checkCollisions = function(canvas) {
    if(this.position.x + this.velocity.x > canvas.width - this.RADIUS ||
      this.position.x + this.velocity.x < this.RADIUS) {
      this.velocity.x = -this.velocity.x;
    }

    if(this.position.y + this.velocity.y > canvas.height - this.RADIUS ||
      this.position.y + this.velocity.y < this.RADIUS) {
      this.velocity.y = -this.velocity.y;
    }
  }
}
