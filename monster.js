class Monster extends Ball {
  constructor(x, y, r) {
    super(x, y, r);
    this.image = loadImage("images/Monster-01.png");
  }
  display() {
    var pos = this.body.position;
    translate(pos.x,pos.y);
    image(this.image, 0,0,  this.r,  this.r);
  }
}
