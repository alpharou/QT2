function setup() {

	drawQuadrants = true;
	quadStroke = 2;
	pointSize = 4;

	createCanvas(windowWidth, windowHeight);

	qt = new QuadTree(20, 20, windowWidth - 40, windowHeight - 40, 1);

}

function draw() {

	background(255);

	//Draw QuadTree Boundary
	fill(0);
	noStroke();
	rect(qt.r.x - quadStroke/2, qt.r.y - quadStroke/2, qt.r.w + quadStroke, qt.r.h + quadStroke);

	//Draw Quadrants
	fill(0);
	noStroke();

	if (drawQuadrants) {
		let quadrants = qt.getLeaves();

		for (let q of quadrants) {
			fill(0);
			rect(q.r.x, q.r.y, q.r.w, q.r.h);
			fill(255);
			rect(q.r.x + quadStroke/2, q.r.y + quadStroke/2, q.r.w - quadStroke, q.r.h - quadStroke);
		}
	}

	//Draw points
	fill(0);
	let points = qt.getPoints();
	for (let p of points) {
		ellipse(p.x, p.y, pointSize);
	}
}

function mouseClicked() {

	qt.ins(new Pnt(mouseX, mouseY));

}
