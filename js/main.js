class Point {

  x = 0;
  y = 0;

  /*constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }*/

}

class Point3D extends Point {

  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }

  setX(x) {
    this.x = this.normalizeCoords(x);
  }

  getX() {
    return this.x;
  }

  setY(y) {
    this.y = this.normalizeCoords(y);
  }

  getY() {
    return this.y;
  }

  normalizeCoords(c) {
    return c % 1000;
  }

}

/*let point1 = {
  x: 123,
  y: 456
}
console.log(point1);*/

let point2 = new Point(123, 456);
console.log(point2);

let point3 = new Point3D(12, 34, 56);
point3.x = 69;
console.log(point3.x);
