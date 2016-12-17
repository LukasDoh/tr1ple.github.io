
function obstacle() {
  this.top = random(350, jumper.yground - 20);
  this.ypos = groundline - this.top;
  this.xpos = width;
  this.w = 20;
  this.speed = 3;
  this.hightlight = false;
  this.didhit = false;

  this.hits = function(jumper) {
    if (jumper.ypos > this.top) {
      if (jumper.xpos > this.xpos && jumper.xpos < this.xpos + this.w) {
        this.highlight = true;
        return true;
        this.didhit = true;
        score = score - 2
      }
    }
    return false;
  }

  this.show = function () {
    noStroke();
    fill(255);
    if (this.highlight == true) {
      fill(255, 0, 0);
    }
    rect(this.xpos, this.top, this.w, this.ypos);
  }

  this.update = function () {
    this.xpos -= this.speed;
  }

  this.offscreen = function () {
    if (this.xpos < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
