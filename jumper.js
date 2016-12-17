function jumper() {
  this.size = 24;
  this.xpos = width / 10;
  this.yground = (height * 0.8) - (this.size + lnthickness - 1);
  this.ypos =  this.yground;
  this.grav = 1;
  this.velo = 0;

  this.show = function() {
    noFill();
    stroke(255);
    strokeWeight(2);
    rect(this.xpos, this.ypos, this.size, this.size);
  }

  this.jump = function() {
    if (this.ypos < this.yground) {
      this.velo += -this.grav * 8;
    } else {
      this.velo += -this.grav * 16;
    }
  }

  this.update = function() {
    this.velo += this.grav;
    this.ypos += this.velo;
    if (this.ypos > this.yground) {
      this.ypos =  this.yground;
      this.velo = 0;
    }
  }
}
