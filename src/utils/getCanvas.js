/**
 * Function to set up and animate circles on a canvas.
 */

let TOTAL_CIRCLES = 2000;
let width = window.innerWidth;
if(width < 400 ){
  TOTAL_CIRCLES = 300;
}else if(width < 500){
  TOTAL_CIRCLES = 500;
}else if(width < 700){
  TOTAL_CIRCLES = 700;
}else if(width < 1000){
  TOTAL_CIRCLES = 1000;
}else{
  TOTAL_CIRCLES = 1500;
}

export default function getCanvas() {
  // Get canvas element by ID and set its dimensions
  const canvas = document.getElementById("myCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Get 2D rendering context
  const ctx = canvas.getContext("2d");

  // Event listener to adjust canvas dimensions on window resize
  window.addEventListener("resize", () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    if(width < 400 ){
      TOTAL_CIRCLES = 300;
    }else if(width < 500){
      TOTAL_CIRCLES = 500;
    }else if(width < 700){
      TOTAL_CIRCLES = 700;
    }else if(width < 1000){
      TOTAL_CIRCLES = 1000;
    }else{
      TOTAL_CIRCLES = 1500;
    }

    canvas.width = width;
    canvas.height = height;
    init();
  });

  // Array of colors for circles
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

  // Event listener to track mouse position
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

    /**
     * Method to draw the circle on the canvas.
     */
    draw = () => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    /**
     * Method to update the circle's position and size.
     */
    update = () => {
      // Bounce off walls
      if (this.x > innerWidth - this.radius || this.x < this.radius) {
        this.dx = -this.dx;
      } else if (this.y > innerHeight - this.radius || this.y < this.radius) {
        this.dy = -this.dy;
      }

      // Interaction: Expand on mouse proximity, shrink otherwise
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

      // Move circle
      this.x += this.dx;
      this.y += this.dy;

      // Draw updated circle
      this.draw();
    };
  }

  // Array to store circle objects
  let circleArray = [];

  /**
   * Initialize the canvas with a set of circles.
   */
  function init() {
    circleArray = [];
    for (let i = 0; i < TOTAL_CIRCLES; i++) {
      // Generate random parameters for each circle
      let radius = Math.floor(Math.random() * 3) + 2;
      let x = Math.random() * (window.innerWidth - 2 * radius) + radius;
      let y = Math.random() * (window.innerHeight - 2 * radius) + radius;
      let dx = Math.random() - 0.5;
      let dy = Math.random() - 0.5;

      // Create and add a new circle to the array
      circleArray.push(new Circle(x, y, radius, dx, dy));
    }
  }

  /**
   * Animate the circles on the canvas.
   */
  function animate() {
    // Request animation frame for continuous rendering
    requestAnimationFrame(animate);

    // Clear canvas
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Update and draw each circle in the array
    for (let i = 0; i < circleArray.length; i++) circleArray[i].update();
  }

  // Initialize and start animation loop
  init();
  animate();
}
