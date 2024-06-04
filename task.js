class Rectangle {
    constructor(topLeft, bottomRight) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }
}

// 1
function printRectangleInfo(rectangle) {
    console.log(`Top Left: (${rectangle.topLeft.x}, ${rectangle.topLeft.y})`);
    console.log(`Bottom Right: (${rectangle.bottomRight.x}, ${rectangle.bottomRight.y})`);
}

// 2
function getWidth(rectangle) {
    return rectangle.bottomRight.x - rectangle.topLeft.x;
}

// 3
function getHeight(rectangle) {
    return rectangle.bottomRight.y - rectangle.topLeft.y;
}

// 4
function getArea(rectangle) {
    return getWidth(rectangle) * getHeight(rectangle);
}

// 5
function getPerimeter(rectangle) {
    return 2 * (getWidth(rectangle) + getHeight(rectangle));
}

// 6
function changeWidth(rectangle, delta) {
    rectangle.bottomRight.x += delta;
}

// 7
function changeHeight(rectangle, delta) {
    rectangle.bottomRight.y += delta;
}

// 8
function changeWidthAndHeight(rectangle, deltaWidth, deltaHeight) {
    changeWidth(rectangle, deltaWidth);
    changeHeight(rectangle, deltaHeight);
}

// 9
function shiftX(rectangle, deltaX) {
    rectangle.topLeft.x += deltaX;
    rectangle.bottomRight.x += deltaX;
}

// 10
function shiftY(rectangle, deltaY) {
    rectangle.topLeft.y += deltaY;
    rectangle.bottomRight.y += deltaY;
}

// 11
function shiftXY(rectangle, deltaX, deltaY) {
    shiftX(rectangle, deltaX);
    shiftY(rectangle, deltaY);
}

// 12
function isPointInside(rectangle, point) {
    return point.x >= rectangle.topLeft.x && point.x <= rectangle.bottomRight.x &&
           point.y >= rectangle.topLeft.y && point.y <= rectangle.bottomRight.y;
}

// Приклад використання
let rect = new Rectangle({x: 0, y: 0}, {x: 10, y: 5});
printRectangleInfo(rect);
console.log(`Width: ${getWidth(rect)}`); 
console.log(`Height: ${getHeight(rect)}`); 
console.log(`Area: ${getArea(rect)}`);
console.log(`Perimeter: ${getPerimeter(rect)}`);

changeWidth(rect, 5);
changeHeight(rect, 3);
console.log(`New Width: ${getWidth(rect)}`);
console.log(`New Height: ${getHeight(rect)}`);

shiftXY(rect, 2, 3);
printRectangleInfo(rect);

let point = {x: 5, y: 5};
console.log(`Is point inside: ${isPointInside(rect, point)}`);
