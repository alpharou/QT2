function setup() {

	createCanvas(windowWidth, windowHeight);

	shape1 = new Circ(windowWidth/2, windowHeight/2, 100);

}

function draw() {

	background(255);

	shape2 = new Circ(mouseX, mouseY, 200, 200);
	point1 = new Pnt(mouseX, mouseY);

	noFill();
	stroke(0);
	strokeWeight(3);

	ellipse(shape1.x, shape1.y, shape1.r2, shape1.r2, 4);
	ellipse(shape2.x, shape2.y, shape2.r2, shape2.r2, 4);

	strokeWeight(4);
	stroke(0, 255, 0);

	if (shape1.intersects(shape2)) {

		ellipse(shape1.x, shape1.y, shape1.r2, shape1.r2, 4);

	}

	if (shape2.intersects(shape1)) {

		ellipse(shape2.x, shape2.y, shape2.r2, shape2.r2, 4);

	}

	strokeWeight(5);
	stroke(255, 0, 0);

	if (shape1.contains(point1)) {

		ellipse(shape1.x, shape1.y, shape1.r2, shape1.r2, 4);

	}


}
