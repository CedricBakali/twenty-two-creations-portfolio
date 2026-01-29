var canvas = document.querySelector('canvas');




canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = "argb(255, 0, 0, 0.5)";
// c.fillRect(100, 100, 100, 100);

// c.fillStyle = "BLUE";
// c.fillRect(400, 100, 100, 100);

// c.fillStyle = "rgba(0, 255, 0, 0.5)";
// c.fillRect(300, 300, 100, 100);

// c.beginPath();
// c.moveTo(500, 300);
// c.lineTo(700, 200);
// c.lineTo(900, 400);
// c.lineTo(500, 300);

// c.strokeStyle = "blue";
// c.stroke();


// for (var i = 0; i < 5; i++) {

//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     c.beginPath();

//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = "green";
//     c.stroke();
// }



var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = 3;
var dy = 3;  
var radius = 30;



function animate() {
    requestAnimationFrame(animate);
    
    c.clearRect(0, 0, canvas.width, canvas.height);

    c.beginPath();
    
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();

    if (x + radius > window.innerWidth || x - radius < 0) {
        dx = -dx;
    }

    if (y + radius > window.innerHeight || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;

}

animate();