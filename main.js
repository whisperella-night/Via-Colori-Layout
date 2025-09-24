let lotSurface = document.getElementById("lot-surface");
let context = lotSurface.getContext("2d");

lotSurface.width = window.innerWidth - 12.5;
lotSurface.height = window.innerHeight - 12.5;

lotSurface.style.border = '5px solid red';

let lotWidth = lotSurface.width;
let lotHeight = lotSurface.height;

// Create user-submittable function to describe the specific shapes to place.
// Shapes will eventually need to have: l, w, inner text, specific colors
let shapes = [];
shapes.push( { x: 0, y: 0, width: 10, height: 20, color: 'green' });

let draw_shapes = function() {
    context.clearRect(0, 0, lotWidth, lotHeight);
    for (let shape of shapes) {
        context.fillStyle = shape.color;
        context.fillRect(shape.x, shape.y, shape.width, shape.height)
    }
}

draw_shapes();