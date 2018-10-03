function Bricks() {
  this.COUNT = { rows: 7, columns: 9 }
  this.DIMENSIONS = { width: 45, height: 15 }
  this.PADDING = 5
  this.OFFSETS = { top: 5, left: 5 }
  this.BRICK_SIZE = { width: 50, height: 15 }
  this.generateBrickArray = function() {
    var bricks = [];

    for(var c=0; c < this.COUNT.columns; c++) {
      bricks[c] = [];
      for(var r=0; r < this.COUNT.rows; r++) {
        bricks[c][r] = { x: 0, y: 0, display: true};
      }
    }
    return bricks
  }
  this.brickArray = this.generateBrickArray()

  this.drawBrick = function(context, x, y) {
    context.beginPath();
    context.rect(x, y, this.BRICK_SIZE.width, this.BRICK_SIZE.height);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  }

  this.reDraw =  function(context) {
    for(var c=0; c < this.COUNT.columns; c++) {
        for(var r=0; r < this.COUNT.rows; r++) {
            var brickX = (c * (this.BRICK_SIZE.width + this.PADDING))
              + this.OFFSETS.left;
            var brickY = (r * (this.BRICK_SIZE.height + this.PADDING))
              + this.OFFSETS.top;
            this.brickArray[c][r].x = brickX;
            this.brickArray[c][r].y = brickY;
            if (this.brickArray[c][r].display) {
              this.drawBrick(context, brickX, brickY)
            }
        }
    }
  }
}
