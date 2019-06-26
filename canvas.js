const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c = context
const c = canvas.getContext('2d');

// Fill Property
c.fillStyle = "rgba(255, 0, 0, 0.5)";

// c.fillRect (x, y, width, height) = to fill screen with a rectangle
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 0.5)";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.5)";
c.fillRect(300, 300, 100, 100);

// Drawing Line
    //beginPath = Starting Point
c.beginPath();
// c.moveTo(x,y); movement on line destination
c.moveTo(50, 300);
// c.lineTo(x,y) line movement
c.lineTo(300, 100);
c.lineTo(400,300);
// Stroke Property
c.strokeStyle = "blue";
// c.stroke() call on actual drawing of line
c.stroke();

// Drawing Arc/ Circle
    // c.arc(x: Int, y: Int. r:Int, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false))
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle="blue";
// c.stroke();

// Looping Circle to Draw many times
for (let i = 0; i < 3; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let a = Math.random() * 1;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle="rgba(" + r + "," + g + "," + b + ","+ a + ")";
    c.stroke();
}




// Notes
    // What you can draw with canvas: Rectangles, Lines, Arcs - for circles, bezier curves, images, and text
    // To change Rectangle it is a Fill property not Stroke Property.
        // Fill style will change must be placed above desired fill line.
    // Stroke Property = Change to Line
    // RGBA() = Red, Green, Blue, Alpha Color Scheme
    // Start Angle Takes in Radians not degrees, End Angle ask's how long would the arc go on for
console.log(canvas);