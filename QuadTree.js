class QuadTree {

	constructor() {



	}

}

class Pnt {

	constructor(x, y) {

		this.x = x;
		this.y = y;

	}

}

class Quadrant {



}

class Rect {

	constructor(x, y, w, h) {

		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

	}

	contains(p) {

		if (p instanceof Pnt) {

			return !(this.x > p.x
					|| this.x + this.w < p.x
					|| this.y > p.y
					|| this.y + this.w < p.y
				);

		}

		return false;

	}

	intersects(r) {

		if (r instanceof Circ) {

			//Get the min distance between the circle's center and the rect edges
			let dX = r.x - max(this.x, min(r.x, this.x + this.w));
			let dY = r.y - max(this.y, min(r.y, this.y + this.h));

			//If the closest point of the Rect is inside the circle
			return (dX * dX + dY * dY) < (r.rr);

		}

		if (r instanceof Rect) {

			return !(this.x + this.w < r.x
					|| this.x > r.x + r.w
					|| this.y + this.h < r.y
					|| this.y > r.y + r.h
				);

		}

		//If the range is not a Rect or a Circ
		return false;

	}

}

class Circ {

	constructor(x, y, r) {

		this.x = x;
		this.y = y;
		this.r = r;
		this.r2 = r + r;
		this.rr = r * r;

	}

	contains(p) {

		if (p instanceof Pnt) {

			let dX = this.x - p.x;
			let dY = this.y - p.y;

			return (this.rr) > (dX * dX + dY * dY);

		}

		return false;

	}

	intersects(r) {

		if (r instanceof Circ) {

			let dX = r.x - this.x;
			let dY = r.y - this.y;
			let dR = this.r + r.r;

			//If the distance between centers is less than the sum of the radius
			return (dR * dR) > (dX * dX) + (dY * dY);

		}

		if (r instanceof Rect) {

			//Get the min distance between the circle's center and the rect
			let dX = this.x - max(r.x, min(this.x, r.x + r.w));
			let dY = this.y - max(r.y, min(this.y, r.y + r.h));

			//If the closest point of the Rect is inside the circle
			return (dX * dX + dY * dY) < (this.rr);

		}

		//If the range is not a Rect or a Circ
		return false;

	}

}
