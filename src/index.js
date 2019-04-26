const defaultStep = 10.0;

class Shape {
  constructor(p5, strokeColor, steps) {
    this.inProgress = true;
    this.currentStep = 1;
    this.p5 = p5;
    this.strokeColor = strokeColor;
    this.steps = steps;
  }

  draw() {
    this.p5.stroke(this.strokeColor);
    if (this.inProgress) {
      this.drawWithStep();
      this.currentStep++;
      if (this.currentStep > this.steps) {
        this.inProgress = false;
      }
    } else {
      this.drawWhole();
    }
  }

  drawWhole() {}

  drawWithStep() {}
}

export class Circle extends Shape {
  constructor(p5, point, diameter, strokeColor, step) {
    const steps = Math.floor(diameter * p5.PI / step);
    super(p5, strokeColor, steps);
    this.point = point;
    this.diameter = diameter;
  }

  drawWhole() {
    this.p5.circle(this.point.x, this.point.y, this.diameter);
  }

  drawWithStep() {
    const stop = this.p5.radians(360 / this.steps * this.currentStep);
    this.p5.arc(this.point.x, this.point.y, this.diameter, this.diameter, 0, stop);
  }
}

export class Line extends Shape {
  constructor(p5, point1, point2, strokeColor, step) {
    const steps = Math.floor(p5.dist(point1.x, point1.y, point2.x, point2.y) / step);
    super(p5, strokeColor, steps);
    this.point1 = point1;
    this.point2 = point2;
  }

  drawWhole() {
    this.p5.line(this.point1.x, this.point1.y, this.point2.x, this.point2.y);
  }

  drawWithStep() {
    const x = this.point1.x + (this.point2.x - this.point1.x) / this.steps * this.currentStep;
    const y = this.point1.y + (this.point2.y - this.point1.y) / this.steps * this.currentStep;
    this.p5.line(this.point1.x, this.point1.y, x, y);
  }
}

export default class Animated {
  constructor(p5 = window) {
    this.p5 = p5;
    this.shapes = [];
  }

  addLine(point1, point2, strokeColor, step = defaultStep) {
    this.shapes.push(
      new Line(this.p5, point1, point2, strokeColor, step)
    );
  }

  addCircle(point, diameter, strokeColor, step = defaultStep) {
    this.shapes.push(
      new Circle(this.p5, point, diameter, strokeColor, step)
    );
  }

  draw() {
    for (const shape of this.shapes) {
      shape.draw();
      if (shape.inProgress) {
        break;
      }
    }
  }
}
