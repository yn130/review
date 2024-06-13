class Shape  {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getArea() {
        return this.x * this.y 
    }
}

/---- 직사각형 클래스 ----/ 
class Rectangle extends Shape {
    constructor(x,y){
        super(x,y)
    }
    getDiag(){
        return Math.sqrt(this.x**2 + this.y**2)
    }
}

let rec1 = new Rectangle(3,4);
console.log(rec1.getArea());
// console.log(rec1.getDiag());

/---- 삼각형 클래스 ----/ 

class Triangel extends Shape {
    constructor(x,y){
        super(x,y)
    }
    getArea(){
        return this.x * this.y * 0.5
    }
}

let tri = new Triangel(3,4)
console.log(tri.getArea());

/---- 원 클래스 ----/ 

class Circle extends Shape {
    constructor(x,y,radius){
        super(x,y)
        this.radius = radius;
    }

    getArea(){
        const PI = Math.PI
        return PI * this.radius**2 
    }
}
 
let cir = new Circle(3,3,5)
console.log(tri.getArea());