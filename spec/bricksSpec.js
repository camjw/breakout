describe('Bricks', function() {
  var bricks;
  var fakeContext;

  beforeEach(function() {
    fakeContext = jasmine.createSpyObj('fakeContext', ['beginPath', 'rect',
      'fill', 'closePath']);
    bricks = new Bricks();
  });

  it('has a count, dimensions, padding, offsets, and brick sizes', function() {
    default_variables = [bricks.COUNT, bricks.DIMENSIONS, bricks.PADDING,
      bricks.OFFSETS, bricks.BRICK_SIZE]
    expected_output = [{ rows: 7, columns: 9 }, { width: 45, height: 15 }, 5,
      { top: 5, left: 5}, { width: 50, height: 15 }]
    expect(default_variables).toEqual(expected_output)
  });

  it('has an array of bricks', function() {
    expect(bricks.brickArray instanceof Array).toEqual(true)
    expect(bricks.brickArray.length).toEqual(bricks.COUNT.columns)
  });

});
