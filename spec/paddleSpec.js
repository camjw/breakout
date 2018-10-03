describe('Paddle', function() {
  var paddle;
  var fakeContext;
  var fakeCanvas;

  beforeEach(function() {
    fakeContext = jasmine.createSpyObj('fakeContext', ['beginPath', 'rect',
      'fill', 'closePath']);
    fakeCanvas = jasmine.createSpyObj('fakeCanvas', ['height', 'width'])
    fakeCanvas.height = fakeCanvas.width = 100
    paddle = new Paddle(fakeCanvas);
  });

  it('has dimensions', function() {
    expect(paddle.DIMENSIONS).toEqual({height: 10, width: 75})
  });

  it('has a position', function() {
    expect(paddle.position).toEqual(12.5)
  });

  it('can be drawn', function() {
    paddle.draw(fakeContext)
    expect(fakeContext.beginPath).toHaveBeenCalled()
    expect(fakeContext.rect).toHaveBeenCalledWith(12.5, 90, 75, 10)
    expect(fakeContext.fill).toHaveBeenCalled()
    expect(fakeContext.closePath).toHaveBeenCalled()
  });

  it('can update its position', function() {
    paddle.moveLeft = true
    paddle.updatePosition(fakeCanvas)
    expect(paddle.position).toEqual(5.5)
  });

  it('can redraw itself', function() {
    spyOn(paddle, 'draw')
    spyOn(paddle, 'updatePosition')
    paddle.reDraw()
    expect(paddle.draw).toHaveBeenCalled()
    expect(paddle.updatePosition).toHaveBeenCalled()
  })

});
