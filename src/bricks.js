function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Bricks() {
  this.COUNT = { rows: 8, columns: 12 }
  this.PADDING = 5
  this.OFFSETS = { top: 5, left: 5 }
  this.BRICK_SIZE = { width: 34, height: 12 }

  this.generateBrickArray = function() {
    var bricks = [];

    for(var c=0; c < this.COUNT.columns; c++) {
      bricks[c] = [];
      for(var r=0; r < this.COUNT.rows; r++) {
        bricks[c][r] = { x: 0, y: 0, display: true, color: getRandomColor()};
      }
    }
    return bricks
  }
  this.brickArray = this.generateBrickArray()
}

Bricks.prototype.drawBrick = function(context, x, y, color) {
  context.beginPath();
  context.rect(x, y, this.BRICK_SIZE.width, this.BRICK_SIZE.height);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}

Bricks.prototype.reDraw = function(context) {
  for(var c=0; c < this.COUNT.columns; c++) {
    for(var r=0; r < this.COUNT.rows; r++) {
      var brickX = (c * (this.BRICK_SIZE.width + this.PADDING))
      + this.OFFSETS.left;
      var brickY = (r * (this.BRICK_SIZE.height + this.PADDING))
      + this.OFFSETS.top;
      this.brickArray[c][r].x = brickX;
      this.brickArray[c][r].y = brickY;
      if (this.brickArray[c][r].display) {
        this.drawBrick(context, brickX, brickY, this.brickArray[c][r].color)
      }
    }
  }
}
