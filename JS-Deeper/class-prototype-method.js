class Rectangle { //start class
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
} // end class

const square = new Rectangle(10, 10);

console.log(square.area); // class rectangle with height =10, width =10 , .get square method