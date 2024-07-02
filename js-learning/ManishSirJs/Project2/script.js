class Shape {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(`${this.name}`);
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  getAreaCircle() {
    console.log(`${Math.PI * Math.pow(this.radius, 2)}`);
  }
}
class Rectangle extends Shape {
  constructor(name, length, breadth) {
    super(name);
    this.length = length;
    this.breadth = breadth;
  }
  getAreaRectangle() {
    console.log(`${this.length} * ${this.breadth}`);
  }
}

const arCircle = new Circle("Area of Circle", 7);
const arRectangle = new Rectangle("Area of Rectangle", 4, 6);
arCircle.getName();
arCircle.getAreaCircle();
arRectangle.getName();
arRectangle.getAreaRectangle();

// try{
//     fetch('aslkdfasdlkjf')
// }x`

// catch(err){

// }

// finally(){
// }
