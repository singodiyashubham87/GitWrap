const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

const colorsArray = [
  "#191717",
  "#CCC8AA",
  "#7D7C7C",
  "#191717",
  "#2C3333",
  "#1B2430",
];

// Interaction Part
const mousePosition = {
  x: undefined,
  y: undefined,
};
// Event listener for interaction
window.addEventListener("mousemove", (e) => {
  mousePosition.x = e.x;
  mousePosition.y = e.y;
});

// Circle class to create and update circles
class Circle {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.minRadius = radius;
    this.maxRadius = 50;
    this.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
  }

  //   draw method to draw the circle
  draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  //   update method to update the circle to next position
  update = () => {
    if (this.x > innerWidth - this.radius || this.x < this.radius) {
      this.dx = -this.dx;
    } else if (this.y > innerHeight - this.radius || this.y < this.radius) {
      this.dy = -this.dy;
    }

    if (
      mousePosition.x - this.x < 50 &&
      mousePosition.x - this.x > -50 &&
      mousePosition.y - this.y < 50 &&
      mousePosition.y - this.y > -50
    ) {
      if (this.radius < this.maxRadius) this.radius += 1;
    } else {
      if (this.radius > this.minRadius) {
        this.radius -= 1;
      }
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

let circleArray = [];
function init() {
  // Storing all the circles required in an array
  circleArray = [];
  for (let i = 0; i < 2000; i++) {
    let radius = Math.floor(Math.random() * 3) + 2;
    let x = Math.random() * (window.innerWidth - 2 * radius) + radius;
    let y = Math.random() * (window.innerHeight - 2 * radius) + radius;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    circleArray.push(new Circle(x, y, radius, dx, dy));
  }
}

// Calling the animate function in loop to show the animation effect
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < circleArray.length; i++) circleArray[i].update();
}

init();
animate();