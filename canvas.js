const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c = context
const c = canvas.getContext('2d');

// c.fillRect (x, y, width, height) = to fill screen with a rectangle
c.fillRect(20, 150, 40, 20);
c.fillRect(905, 90, 30, 80);
c.fillRect(300, 20, 70, 10);
console.log(canvas);