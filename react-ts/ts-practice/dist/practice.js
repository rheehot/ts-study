"use strict";
class Circle {
    constructor(radius = 0) {
        this.radius = radius;
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
console.log("circle area : ", circle.getArea());
console.log("rectangle area : ", rectangle.getArea());
