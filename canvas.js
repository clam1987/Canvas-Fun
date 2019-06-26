const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c = context
const c = canvas.getContext('2d');

// Fill Property
// c.fillStyle = "rgba(255, 0, 0, 0.5)";

// c.fillRect (x, y, width, height) = to fill screen with a rectangle
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0, 0, 255, 0.5)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(300, 300, 100, 100);

// Drawing Line
    //beginPath = Starting Point
// c.beginPath();
// c.moveTo(x,y); movement on line destination
// c.moveTo(50, 300);
// c.lineTo(x,y) line movement
// c.lineTo(300, 100);
// c.lineTo(400,300);
// Stroke Property
// c.strokeStyle = "blue";
// c.stroke() call on actual drawing of line
// c.stroke();

// Drawing Arc/ Circle
    // c.arc(x: Int, y: Int. r:Int, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false))
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle="blue";
// c.stroke();

// Looping Circle to Draw many times
// for (let i = 0; i < 3; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     let r = Math.random() * 255;
//     let g = Math.random() * 255;
//     let b = Math.random() * 255;
//     let a = Math.random() * 1;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     // c.strokeStyle="rgba(" + r + "," + g + "," + b + ","+ a + ")";
//     c.strokeStyle="blue";
//     c.stroke();
// }

    // c.beginPath();
    // c.arc(200, 200, 30, 0, Math.PI * 2, false);
    // c.strokeStyle="blue";
    // c.stroke();


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle="blue";
        c.stroke();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
    

}



let circleArray = [];

for (var i = 0; i < 100; i++) {
    let radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5);
    let dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y ,dx, dy, radius));
    // let circle = new Circle(200, 200, 3, 3, 30);
}

console.log(circleArray);

function animate() {
    requestAnimationFrame(animate);
// c.clearRect(x,y, width, height) clears the canvas so it does not loop the draw circle
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    // if (x + radius > innerWidth || x - radius < 0) {
    //     dx = -dx;
    // }

    // if (y + radius > innerHeight || y - radius < 0) {
    //     dy = -dy;
    // }
    // x += dx;
    // y += dy;
}


animate();
// Notes
    // What you can draw with canvas: Rectangles, Lines, Arcs - for circles, bezier curves, images, and text
    // To change Rectangle it is a Fill property not Stroke Property.
        // Fill style will change must be placed above desired fill line.
    // Stroke Property = Change to Line
    // RGBA() = Red, Green, Blue, Alpha Color Scheme
    // Start Angle Takes in Radians not degrees, End Angle ask's how long would the arc go on for
    // requestAnimationFrame = requests to aniamte the frame
    // dx = velocity x, dy = velocity y
    // Must declare radius for the circle to bounce at the edge and not the middle of circle.
    // draw() is used to draw our code
console.log(canvas);