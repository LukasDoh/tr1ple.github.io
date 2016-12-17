var jumper;
var obstacles = [];
var lnthickness = 4;
var groundline = 0;
var score = 0;
var xscore = 20;
var yscore = 500;

function setup() {
	createCanvas(400, 600);
	groundline = height * 0.8
	jumper = new jumper;
	obstacles.push(new obstacle());
}

function draw() {
	background(0);
	noStroke();
	fill(255);
	textSize(20);
	text("SCORE: " + score, xscore, yscore);
	for (var i = obstacles.length-1; i >= 0; i--) {
		obstacles[i].show();
		obstacles[i].update();
		if (obstacles[i].hits(jumper)) {
			score = score - 2
			if (score < 0) {
				score = 0;
			}
		}

		if(obstacles[i].offscreen()) {
			obstacles.splice(i, 1);
			if (obstacles.didhit == true) {
				obstacles.didhit = false;
			} else {
				score = score + 5;
			}
			console.log("score: " + score);
		}
	}


	fill(255);
	stroke(255);
	strokeWeight(lnthickness);
	line(0, groundline, width, groundline);
	jumper.update();
	jumper.show();

	if (frameCount % 80 == 0) {
		obstacles.push(new obstacle());
	}
}

function keyPressed() {
	if (key == " ") {
		if (jumper.ypos == jumper.yground || (jumper.ypos >= 333 && jumper.ypos <= 350)) {
			jumper.jump();
		}
	}
}
