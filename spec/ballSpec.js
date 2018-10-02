describe("Ball", function() {
  var ball;

  beforeEach(function() {
    ball = new Ball();
  });

  it("should have starting x", function() {
    console.log(ball.x)
    expect(ball.x).toEqual(5)
  });

});
