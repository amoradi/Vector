class Vector {
  constructor(x, y) {
    this.vx = x;
    this.vy = y;
  }
  
  scale(scale) {
    this.vx *= scale;
    this.vy *= scale;
  }

  add(vec2) {
    this.vx += vec2.vx;
    this.vy += vec2.vy;
  }

  sub(vec2) {
    this.vx -= vec2.vx;
    this.vy -= vec2.vy;
  }

  negate() {
    this.vx = -this.vx;
    this.vy = -this.vy;
  }

  // return vector length using Pythagoras
  length() {
    return Math.sqrt(this.lengthSquared());
  }

  lengthSquared() {
    return this.vx * this.vx + this.vy * this.vy;
  }

  // turn vector into unit lenght vector
  normalize() {
    const vecLen = this.length();

    if (vecLength) {
      this.vx /= vecLen;
      this.vy /= vecLen;
    }
  }

  rotate(angle) {
    const vx = this.vx;
    const vy = this.vy;
    const cosVal = Math.cos(angle);
    const sinVal = Math.sin(angle);

    this.vx = vx * cosVal - vy * sinVal;
    this.vx = vx * sinVal + vy * cosVal;
  }

  // todo: doProduct() {}
  
  toString() {
    return `(${this.vx.toFixed(3)}, ${this.vy.toFixed(3)})`;
  }
};

export { Vector };
