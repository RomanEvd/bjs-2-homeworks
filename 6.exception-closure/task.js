// Задание 1.

function parseCount(value) {
    const number = Number.parseInt(value, 10);
    if (number) {
        return number;
    }
    throw new Error("Невалидное значение");
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch(err) {
        return err;
    }
}

// Задание 2.

class Triangle {
    constructor(a, b, c) {
        if(((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.leftSide = a;
        this.rightSide = b;
        this.basicSide = c;
    }
    getPerimeter() {
        return this.leftSide + this.rightSide + this.basicSide;
    }
    getArea() {
        let hP = 0.5 * this.getPerimeter(); 
        return parseFloat(Math.sqrt(hP * (hP - this.leftSide) * (hP - this.rightSide) * (hP - this.basicSide)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch(err) {
        let dummyTriangle = new Object();
        dummyTriangle.getArea = function() {return "Ошибка! Треугольник не существует";};
        dummyTriangle.getPerimeter = function() {return "Ошибка! Треугольник не существует";};
        return dummyTriangle;
    }
}