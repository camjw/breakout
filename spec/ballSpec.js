describe('Ball', function() {
  var ball;
  var fakeContext;
  var fakeCanvas;

  beforeEach(function() {
    ball = new Ball();
    fakeContext = jasmine.createSpyObj('fakeContext', ['beginPath', 'arc',
      'fill', 'closePath']);
    fakeCanvas = jasmine.createSpyObj('fakeCanvas', ['height', 'width'])
    fakeCanvas.height = fakeCanvas.width = 100
  });

  it('should have starting position', function() {
    expect(ball.position).toEqual({x: 200, y: 150})
  });

  it('should have starting velocity', function() {
    expect(ball.velocity).toEqual({x: 1, y: 1})
  });

  it('should have a radius', function() {
    expect(ball.RADIUS).toEqual(7)
  });

  it('should be able to be drawn on a canvas', function() {
    ball.draw(fakeContext)
    expect(fakeContext.beginPath).toHaveBeenCalled()
    expect(fakeContext.arc).toHaveBeenCalledWith(200, 150, 7, 0, Math.PI*2)
    expect(fakeContext.fill).toHaveBeenCalled()
    expect(fakeContext.closePath).toHaveBeenCalled()
  });

  it('should be able to be redrawn', function() {
    spyOn(ball, 'updatePosition')
    spyOn(ball, 'draw')
    ball.reDraw(fakeContext)
    expect(ball.updatePosition).toHaveBeenCalled()
    expect(ball.draw).toHaveBeenCalledWith(fakeContext)
  });

  it('Knows when it has collided with a wall', function() {
    ball.position = { x: 99, y: 99 }
    ball.checkCollisions(fakeCanvas)
    expect(ball.velocity).toEqual({ x: -1, y: -1 })
  });
});
