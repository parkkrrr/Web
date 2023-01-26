
// Object-oriented Programming (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

// circle.draw();  // Method

// Factory Function

function createCircle(radius) {

    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle1 = new Circle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

